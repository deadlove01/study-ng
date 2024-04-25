import {Component, OnInit} from '@angular/core';
import {Appoinment} from "../models/appoinment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  appointmentList: Appoinment[] = [];
  appointmentTitle: string = '';
  appointmentDate: Date = new Date();


  onAddAppointment(): void {

    if (this.appointmentTitle.trim().length > 0 && this.appointmentDate) {
      this.appointmentList.push({
        id: Date.now(),
        title: this.appointmentTitle,
        date: this.appointmentDate
      })

      this.appointmentTitle = '';
      this.appointmentDate = new Date();

      localStorage.setItem("appointmentList", JSON.stringify(this.appointmentList));
    }
  }

  onDeleteAppointment(id: number): void {
    this.appointmentList = this.appointmentList.filter(appointment => appointment.id !== id);
    localStorage.setItem("appointmentList", JSON.stringify(this.appointmentList));
  }

  ngOnInit(): void {
    const existingAppointmentList = localStorage.getItem("appointmentList");
    if (existingAppointmentList) {
      this.appointmentList = JSON.parse(existingAppointmentList);
    }
  }
}
