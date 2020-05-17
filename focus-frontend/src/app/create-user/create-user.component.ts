import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../servises/create-user.service';
import { first } from 'rxjs/operators';
import { SimpleOrganization } from '../models/simple-organisation';
import { Observable } from 'rxjs';


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

  organizations$: Observable<SimpleOrganization[]>;

  loadOrganizations(){
    this.organizations$ = this.pageService.getOrganizations();
  }

  ngOnInit(): void {
    this.loadOrganizations();
    this.createForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      patronymic: ["", Validators.required],
      organizationId: ["", Validators.required],
      userRole: ["", Validators.required]
    });
  }

  onChange(type) {
    console.log(this.form.organizationId)
  }

  

  get form(){
    return this.createForm.controls;
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }

    console.log(this.form.name.value, this.form.surname.value, this.form.patronymic.value, this.form.organizationId.value, this.form.userRole.value);

    this.pageService
      .postUser(this.form.name.value, this.form.surname.value, this.form.patronymic.value, this.form.organizationId.value, this.form.userRole.value)
      .pipe(first())
      .subscribe(x => {
        this.router.navigate(["/organizations"])
      })
  }

}
