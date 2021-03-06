import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SimpleOrganization } from '../models/simple-organisation';
import { retry, catchError } from 'rxjs/operators';
import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsListService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http:HttpClient) {}

  getOrganisations(): Observable<SimpleOrganization[]>{
    return this.http
    .get<SimpleOrganization[]>("http://localhost:5000/api/org/info", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  getOrgInfo(id): Observable<Organization>{
    return this.http
    .get<Organization>("http://localhost:5000/api/org/" + id, this.httpOptions)
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
