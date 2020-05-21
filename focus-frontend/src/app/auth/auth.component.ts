import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../servises/authentication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  actionType: string;
  error = "";

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) { }

  @ViewChild("password") pass: ElementRef;

  ngOnInit(){

    if(this.authService.userIsAdmin){
      this.router.navigate(['/navigation'])
    } else if(this.authService.userIsLoggedIn){
      this.router.navigate(['/report-list'])
    }

    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get form() {
    return this.loginForm.controls;
  }

  changePassVisibility(i){
    if(this.pass.nativeElement.type === "password"){
      this.pass.nativeElement.type = "text";
    } else {
      this.pass.nativeElement.type = "password";
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.form.username, this.form.password);

    this.authService
      .login(this.form.username.value, this.form.password.value)
      
      
      // .pipe(first())
      // .subscribe(
      //   data => {
      //     this.router.navigate([this.returnUrl]);
      //   },
      //   error => {
      //     this.error = error;
      //   }
      // );

  }

}
