import { Component, OnInit } from '@angular/core';
import { SimpleUser } from 'src/app/models/simple-user';
import { Observable } from 'rxjs';
import { OrgSettingsService } from 'src/app/servises/org-settings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-org-settings-users',
  templateUrl: './org-settings-users.component.html',
  styleUrls: ['./org-settings-users.component.scss']
})
export class OrgSettingsUsersComponent implements OnInit {
  users$: Observable<SimpleUser[]>;

  constructor(private pageService: OrgSettingsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadUsers();

    this.users$.subscribe(x => console.log(x))
  }

  loadUsers(){
    this.users$ = this.pageService.getUsers();
  }

}
