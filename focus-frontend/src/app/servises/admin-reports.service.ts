import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ShortReportInfo } from '../models/short-organisation';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminReportsService {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http:HttpClient) {}

  getOrganisations(): Observable<ShortReportInfo[]>{
    return this.http
    .get<ShortReportInfo[]>("http://localhost:5000/api/report/org", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  getAllReports(): Observable<ShortReportInfo[]> {
    return this.http
    .get<ShortReportInfo[]>("http://localhost:5000/api/report/info", this.httpOptions)
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
