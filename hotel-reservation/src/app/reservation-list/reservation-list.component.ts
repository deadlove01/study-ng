import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../reservation/reservation.service";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {

  reservationList: Reservation[] = [];

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    // this.reservationList = this.reservationService.getReservations();
    this.reservationService.getReservations().subscribe(res => {
      this.reservationList = res;
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("deleted!");
      const index = this.reservationList.findIndex(x => x.id === id);
      this.reservationList.splice(index, 1);
    });
  }
}
