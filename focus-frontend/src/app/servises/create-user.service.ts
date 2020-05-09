import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { SimpleOrganization } from '../models/simple-organisation';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http: HttpClient) { }

  postUser(name: string, surname: string, patronymic:string, organizationId: string, userRole: string){
    return this.http
    .post<string>("http://localhost:5200/api/identity/create",{
      name,
      surname,
      patronymic,
      organizationId,
      userRole,
    })
    .pipe(catchError(this.errorHandler));
  }

  getOrganizations(): Observable<SimpleOrganization[]>{
    return this.http
    .get<SimpleOrganization[]>("http://localhost:5200/api/org/info", this.httpOptions)
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
