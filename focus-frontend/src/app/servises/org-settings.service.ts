import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Organization } from '../models/organization';
import { retry, catchError } from 'rxjs/operators';
import { SimpleUser } from '../models/simple-user';

@Injectable({
  providedIn: 'root'
})
export class OrgSettingsService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http:HttpClient) { }

  getInfo(): Observable<Organization>{
    return this.http
    .get<Organization>("http//localhost5000/api/organization/info", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  getUsers(): Observable<SimpleUser[]>{
    return this.http
    .get<SimpleUser[]>("http//localhost5000/api/organization/users", this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  saveInfo(title: string, adress: string, number: number){
    return this.http
    .post<string>("http//localhost5000/api/organiation/change", {
      title,
      adress,
      number
    })
    .pipe(catchError(this.errorHandler))
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
