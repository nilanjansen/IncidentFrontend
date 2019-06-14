import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import {AppSetting} from 'src/shared/appsetting';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  apiURL: string = 'https://localhost:44338/api/Incident';
  constructor(public httpclient:HttpClient) { }

  GetAllIncidents(){  
    //return this.http.get(AppSetting.API_ENDPOINT + 'incident').pipe(map(res =>res.json()));  
    return this.httpclient.get(this.apiURL);
  } 
}
