import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import {AppSetting} from 'src/shared/appsetting';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  constructor(public httpclient:HttpClient) { }

  GetAllIncidents(){  
    return this.httpclient.get(AppSetting.API_ENDPOINT);
  } 
}
