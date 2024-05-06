import { Injectable } from '@angular/core';
import {Reservation} from "../models/reservation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationList: Reservation[] = [];

  private apiUrl: string = "http://localhost:5167/api";

  constructor(private apiHttpClient: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.apiHttpClient.get<Reservation[]>(`${this.apiUrl}/reservation`);
    // return this.reservationList;
  }

  getReservationById(id: string): Observable<Reservation | undefined> {
    return this.apiHttpClient.get<Reservation>(`${this.apiUrl}/reservation/${id}`);
    // return this.reservationList.find(x => x.id === id);
  }

  addReservation(newReservation: Reservation): Observable<void> {
    return this.apiHttpClient.post<void>(`${this.apiUrl}/reservation`, newReservation);
    // newReservation.id = Date.now().toString();
    // this.reservationList.push(newReservation);
  }

  deleteReservation(id: string): Observable<void>{
    return this.apiHttpClient.delete<void>(`${this.apiUrl}/reservation/${id}`)
    // let index = this.reservationList.findIndex(x => x.id === id);
    // this.reservationList.splice(index, 1);
  }

  updateReservation(id:string, updatingReservation: Reservation){
    this.apiHttpClient.put<Reservation>(`${this.apiUrl}/reservation/${id}`, updatingReservation)
      .subscribe(()=> {
        console.log('updated');

      })
    // const index = this.reservationList.findIndex(x => x.id === id);
    // if (index !== -1)
    // {
    //   this.reservationList[index] = updatingReservation;
    // }
  }
}
