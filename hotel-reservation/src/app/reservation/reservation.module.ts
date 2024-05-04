import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservationFormComponent} from "../reservation-form/reservation-form.component";
import {ReservationListComponent} from "../reservation-list/reservation-list.component";
import {HomeModule} from "../home/home.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
