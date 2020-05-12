import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HTTP_INTERCEPTORS
  } from "@angular/common/http";
  import { AuthenticationService } from "../servises/authentication.service";
  import { Observable } from "rxjs";
  import { Injectable } from "@angular/core";
  
  @Injectable({
    providedIn: "root"
  })
  export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
      
      if (this.authenticationService.userIsLoggedIn) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem("currentUser")}`
          }
        });
      }
  
      return next.handle(request);
    }
  }
  
  export const jwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  };