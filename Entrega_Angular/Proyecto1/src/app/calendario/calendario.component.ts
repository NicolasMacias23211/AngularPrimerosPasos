import { Appointment,AppService } from './../service/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.sass']
})

export class CalendarioComponent {
  appointments: Appointment[];
 
  constructor(service: AppService) {
      this.appointments = service.getAppointments();
}
}