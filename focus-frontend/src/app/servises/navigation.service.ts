import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ShortReportInfo } from '../models/short-organisation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { SimpleOrganization } from '../models/simple-organisation';
import { Template } from '../models/templates';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http:HttpClient) { }


  getAllReports(): Observable<ShortReportInfo[]> {
    return this.http
    .get<ShortReportInfo[]>("http://localhost:5000/api/report/info", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  getAllOrgs(): Observable<SimpleOrganization[]> {
    return this.http
    .get<SimpleOrganization[]>("http://localhost:5000/api/org/info", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  getAllTemplates(): Observable<Template[]> {
    return this.http
    .get<Template[]>("http://localhost:5000/api/report/template/info", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  getAllSchedules(): Observable<ShortReportInfo[]> {
    return this.http
    .get<ShortReportInfo[]>("http://localhost:5000/api/report/schedule/info", this.httpOptions)
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
