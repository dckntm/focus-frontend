import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { Observable } from 'rxjs';
import { OrgSettingsService } from 'src/app/servises/org-settings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-org-settings-info',
  templateUrl: './org-settings-info.component.html',
  styleUrls: ['./org-settings-info.component.scss']
})
export class OrgSettingsInfoComponent implements OnInit {
  Organization$: Observable<Organization>;
  infoForm: FormGroup;
  error: "";
  actionType: string;

  constructor(private pageService: OrgSettingsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loadInfo();

    this.infoForm = this.formBuilder.group({
      title: ["", Validators.required],
      adress: ["", Validators.required],
      number: ["", Validators.required]
    });

    this.Organization$.subscribe(x => console.log(x));
  }

  loadInfo(){
    this.Organization$ = this.pageService.getInfo();
  }

  get form(){
    return this.infoForm.controls;
  }

  onSubmit() {
    if (this.infoForm.invalid) {
      return;
    }

    console.log(this.form.title, this.form.adress, this.form.number);

    this.pageService
      .saveInfo(this.form.title.value, this.form.adress.value, this.form.number.value)
      .pipe(first())
  }

}
