import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CreateTimetableService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http: HttpClient) {}

  getTemplates(){
    return this.http
    .get<string[]>("http://localhost5000/api/get/templates", this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  getOrganisations(){
    return this.http
    .get<string[]>("http://localhost5000/api/get/organisations", this.httpOptions)
    .pipe(catchError(this.errorHandler));
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
