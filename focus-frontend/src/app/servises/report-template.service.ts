import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Report } from "../models/reporet-template";



@Injectable({
  providedIn: 'root'
})
export class ReportTemplateService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  constructor(private http: HttpClient) {}

  postReport(id: string, title: string, questionnaires: object[], tables: any[]){
    return this.http
      .post<Report>("http://localhost:5000/api/report/template", {
          id,
          title,
          questionnaires,
          tables,
      })
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = "You are dumbhead and have an error";
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
