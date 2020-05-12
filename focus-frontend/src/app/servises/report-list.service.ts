import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ShortOrganisation } from '../models/short-organisation'

@Injectable({
  providedIn: 'root'
})
export class ReportListService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http:HttpClient) {}

  getOrganisations(): Observable<ShortOrganisation[]>{
    return this.http
    .get<ShortOrganisation[]>("http://localhost:5000/api/report/org", this.httpOptions)
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
