import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SimpleTimetable } from '../models/simple-timetable';
import { retry, catchError } from 'rxjs/operators';
import { SimpleOrganization } from '../models/simple-organisation';
import { Template } from '../models/templates';

@Injectable({
  providedIn: 'root'
})
export class TimetableListService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http:HttpClient) {}

  getOrgs():Observable<SimpleOrganization[]>{
    return this.http
      .get<SimpleOrganization[]>("http://localhost:5000/api/org/info", this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  getTemplates(): Observable<Template[]>{
    return this.http
    .get<Template[]>("http://localhost:5000/api/report/template/info", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  getOrganisations(): Observable<SimpleTimetable[]>{
    return this.http
    .get<SimpleTimetable[]>("http://localhost:5000/api/report/schedule/info", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = "You are dumbhead and have error";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
