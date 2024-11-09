import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarEventTimesChangedEvent, CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-calendario2',
  templateUrl: './calendario2.component.html',
  styleUrls: ['./calendario2.component.sass']
})

export class Calendario2Component {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = false;
  CalendarView = CalendarView;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    // Aquí puedes manejar el evento de clic en el día
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // Aquí puedes manejar el evento de clic en el evento
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    // Aquí puedes manejar el evento de cambio de tiempo del evento
  }
}

