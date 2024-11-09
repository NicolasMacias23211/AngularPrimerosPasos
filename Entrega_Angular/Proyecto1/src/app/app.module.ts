import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderIndex } from './HeaderIndex.component/Header.component';
import { IndexCont } from './IndexCont.component/IndexCont.component';
import { headerDetalles } from './HeaderDetalles.component/HeaderDetalles';
import { LateralInformationComponent } from './lateral-information/lateral-information.component';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { DetallesPrincipalComponent } from './detalles-principal/detalles-principal.component';
import { FootherComponent } from './foother/foother.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendario2Component } from './calendario2/calendario2.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DxSchedulerModule } from 'devextreme-angular'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderIndex,
    IndexCont,
    headerDetalles,
    LateralInformationComponent,
    DetallesComponent,
    HomeComponent,
    DetallesPrincipalComponent,
    FootherComponent,
    CalendarioComponent,
    Calendario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    DxSchedulerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
