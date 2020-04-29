import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { Observable } from 'rxjs';
import { OrgSettingsService } from 'src/app/servises/org-settings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-org-settings-info',
  templateUrl: './org-settings-info.component.html',
  styleUrls: ['./org-settings-info.component.scss']
})
export class OrgSettingsInfoComponent implements OnInit {
  Organization$: Observable<Organization>

  constructor(private pageService: OrgSettingsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadInfo();

    this.Organization$.subscribe(x => console.log(x));
  }

  loadInfo(){
    this.Organization$ = this.pageService.getInfo();
  }

}
