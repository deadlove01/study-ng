import { Injectable } from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationList: Reservation[] = [];

  constructor() {
    const savedReservations = localStorage.getItem("reservations");
    this.reservationList = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getReservations(): Reservation[] {
    return this.reservationList;
  }

  getReservationById(id: string): Reservation | undefined {
    return this.reservationList.find(x => x.id === id);
  }

  addReservation(newReservation: Reservation) {
    newReservation.id = Date.now().toString();
    this.reservationList.push(newReservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservationList));
  }

  deleteReservation(id: string){
    let index = this.reservationList.findIndex(x => x.id === id);
    this.reservationList.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservationList));
  }

  updateReservation(id:string, updatingReservation: Reservation){
    const index = this.reservationList.findIndex(x => x.id === id);
    if (index !== -1)
    {
      this.reservationList[index] = updatingReservation;
      localStorage.setItem("reservations", JSON.stringify(this.reservationList));
    }
  }
}
