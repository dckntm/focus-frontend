import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';

// export interface ApplicationUser{
//   token: string;
//   username: string;
//   expiresIn: Date;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAdmin: BehaviorSubject<boolean>;
  private isLoggedIn: BehaviorSubject<boolean>;

  constructor(private readonly http: HttpClient, private router: Router,) {
    this.isAdmin = new BehaviorSubject<boolean>(false);

    if (localStorage.getItem("currentUser") != '')
      this.isLoggedIn = new BehaviorSubject<boolean>(true);
    else 
      this.isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  public get userIsAdmin() : boolean {
    return this.isAdmin.value;
  }

  public get userIsLoggedIn() : boolean {
    return this.isLoggedIn.value;
  }

  login(username: string, password: string) {
    console.log("logging in");

    return this.http
      .post<string>("http://localhost:5000/api/identity/login", { username, password })
      .subscribe(token => {
        
        console.log(token);

        localStorage.setItem("currentUser", token)

        var token_info = jwt_decode(token);

        console.log(token_info);

        if (token_info.role == 'HOA')
        {
          this.isAdmin.next(true);
          console.log("admin logged in");
          this.router.navigate(["/navigation"])
        }
        else {
          console.log("user logged in");
          this.isAdmin.next(false);
          this.router.navigate(["/report-list"])
        }

        this.isLoggedIn.next(true);
        
      });
    }
    
    logout() {
      localStorage.removeItem("currentUser");
      this.isAdmin.next(false);
      this.isLoggedIn.next(false);
  }
}
