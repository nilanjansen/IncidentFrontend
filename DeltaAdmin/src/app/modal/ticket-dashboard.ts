import { ITicketDashboard } from './ticket-dashboard.interface';

export class TicketDashboard implements ITicketDashboard {
    constructor(public ticketNumber: string, public issueLocation: string,
        public issueType: string, public userName: string, public userContactNumber: number,
        public issueImage: any) { }
}