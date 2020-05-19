import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthenticationService } from "../servises/authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserActivate implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.userIsLoggedIn) {
      this.router.navigate(["/"]);
    }
    return true;
  }
}
