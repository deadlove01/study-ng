import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../models/reservation";
import {ReservationService} from "../reservation/reservation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{

  reservationForm: FormGroup = new FormGroup([]);

  constructor(private formBuilder: FormBuilder,
              private reservationService: ReservationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });


    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
    {
      let existed = this.reservationService.getReservationById(id).subscribe((data) =>{
        if(data)
          this.reservationForm.patchValue(data);
      });

    }
  }

  onSubmit() {
    if(this.reservationForm.valid)
    {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id)
      {
        this.reservationService.updateReservation(id, reservation);
      }else
      {
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("added");
        });
      }


      // this.router.navigate(['/list']);
    }
  }
}
