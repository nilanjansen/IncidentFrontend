import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ITicketDashboard } from '../modal/ticket-dashboard.interface';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { TicketDashboard } from '../modal/ticket-dashboard';


@Injectable()
export class TicketDashboardService {

    constructor(private httpClient: HttpClient) {
    }

    get(): Observable<ITicketDashboard[]> {
        return this.httpClient.get(environment.apiEndPointUrl).pipe(
            map(data => this.mapToTicketDetails(data)));
    }

    private mapToTicketDetails(ticketDetails: any): ITicketDashboard[] {
        let ticketDashboard = [];
        ticketDetails.forEach(element => {
            const ticketInfo = new TicketDashboard(element.incidentId, element.location,
                element.issueType, "", element.creatorContact, element.media);
            ticketDashboard.push(ticketInfo);
        });
        return ticketDashboard;
    }
}