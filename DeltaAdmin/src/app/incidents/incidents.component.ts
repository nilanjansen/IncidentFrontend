import { Component, OnInit } from '@angular/core';
import {IncidentService} from "./services/incident.service"
import { Incidentmodel } from './model/incidentmodel';

@Component({
  selector: 'app-root',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.sass']
})
export class IncidentsComponent implements OnInit {
  incidents:Incidentmodel[];
 mediaByte: string;
  constructor(private incidentserv : IncidentService) { }

  ngOnInit() {

    this.incidentserv.GetAllIncidents().subscribe(
      data => {
        this.incidents = data as [];
      }
    );
  }
}
