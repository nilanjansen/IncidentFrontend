import { Component, OnInit } from '@angular/core';
import { TicketDashboardService } from '../service/ticket-dashboard.service';
import { TicketDashboard } from '../modal/ticket-dashboard';
import { DomSanitizer } from '@angular/platform-browser';
import { from } from 'rxjs';
import { ITicketDashboard } from '../modal/ticket-dashboard.interface';

@Component({
  selector: 'app-ticket-dashboard',
  templateUrl: './ticket-dashboard.component.html',
  styleUrls: ['./ticket-dashboard.component.scss']
})
export class TicketDashboardComponent implements OnInit {

  ticketDetails: any = [];
  imageDetail: any;
  spinner: boolean;

  constructor(private ticketDashboardService: TicketDashboardService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.bindIssueDetails();
  }

  private bindIssueDetails() {
    this.ticketDashboardService.get().
      subscribe((data: ITicketDashboard[]) => {
        if (data) {
          data.forEach(item => {
            const ticketInfo = new TicketDashboard(
              item.ticketNumber,
              item.issueLocation,
              item.issueType,
              "",
              item.userContactNumber,
              this.imageContent(item.issueImage));
            this.ticketDetails.push(ticketInfo);
          });
        }
        this.spinner = true;
      });
  }

  private imageContent(imageByte: any): any {
    if (imageByte) {
      const imageData = 'data:image/png;base64,' + imageByte;
      return this.imageDetail = this.domSanitizer.bypassSecurityTrustUrl(imageData);
    }
    return null;
  }
}
