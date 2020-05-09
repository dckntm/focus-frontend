import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateOrgService } from '../servises/create-org.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.scss']
})
export class CreateOrgComponent implements OnInit {
  createForm: FormGroup;
  error: "";
  actionType: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private pageService: CreateOrgService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      id: ["", Validators.required],
      title: ["", Validators.required],
      address: ["", Validators.required],
      number: ["", Validators.required],
      isHead: [false, Validators.required]
    });
  }

  get form(){
    return this.createForm.controls;
  }

  onSubmit() {
    

    console.log(this.form.title, this.form.address, this.form.number);

    this.pageService
      .postOrg(this.form.id.value, this.form.title.value, this.form.address.value, this.form.number.value, this.form.isHead.value)
      .pipe(first())
  }

}
