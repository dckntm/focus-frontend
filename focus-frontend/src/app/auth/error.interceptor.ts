import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { AuthenticationService } from "../servises/authentication.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(["/"])
          alert("Введите логин и пароль чтоб перейти всервис")
          // this.authenticationService.logout();
          // location.reload(true);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}

export const errorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};