import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../servises/create-user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createForm: FormGroup;
  error: "";
  actionType: string;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private pageService: CreateUserService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      userRole: ["", Validators.required]
    });
  }

  get form(){
    return this.createForm.controls;
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }

    console.log(this.form.name, this.form.email, this.form.username, this.form.password);

    this.pageService
      .postUser(this.form.name.value, this.form.email.value, this.form.username.value, this.form.password.value, this.form.userRole.value)
      .pipe(first())
  }

}
