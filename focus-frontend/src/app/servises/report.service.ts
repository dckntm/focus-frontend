import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Report } from '../models/report';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http: HttpClient) { }

  getReport(id: string): Observable<Report> {
    console.log(id);

    return this.http
      .get<Report>("http://localhost:5000/api/report/get/" + id , this.httpOptions)
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
  
  passReport(report:any)
  {
    return this.http.post("http://localhost:5000/api/report/pass", report, this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler))
  }

  saveReport(report:any)
  {
    return this.http.post("http://localhost:5000/api/report/save", report, this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler))
  }
}
