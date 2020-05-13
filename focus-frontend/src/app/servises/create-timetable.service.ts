import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Template } from '../models/templates';
import { SimpleOrganization } from '../models/simple-organisation';


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

  getTemplates() : Observable<Template[]>{
    return this.http
    .get <Template[]>("http://localhost:5000/api/report/template/info", this.httpOptions)
    .pipe(catchError(this.errorHandler));
    console.log('got');
  }

  getOrganisations(): Observable<SimpleOrganization[]>{
    return this.http
    .get<SimpleOrganization[]>("http://localhost:5000/api/org/info", this.httpOptions)
    .pipe(catchError(this.errorHandler));
    console.log('got');
  }

  postTimetable(timetable: object){
    return this.http
    .post("http://localhost:5000/api/report/schedule", timetable)
    .pipe(catchError(this.errorHandler))
    .subscribe(x => console.log(x));
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
