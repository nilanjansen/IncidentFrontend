import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketDashboardComponent } from './ticket-dashboard/ticket-dashboard.component';
import { TicketDashboardService } from './service/ticket-dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TicketDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TicketDashboardService],
  bootstrap: [TicketDashboardComponent]
})
export class AppModule { }
