import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDashboardComponent } from './ticket-dashboard/ticket-dashboard.component';

const routes: Routes = [{
  path: '', component: TicketDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
