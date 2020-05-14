import { Component, OnInit } from '@angular/core';
import { SimpleOrganization } from 'src/app/models/simple-organisation';
import { Observable } from 'rxjs';
import { OrganisationsListService } from '../../servises/organisations-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organisations-list-list',
  templateUrl: './organisations-list-list.component.html',
  styleUrls: ['./organisations-list-list.component.scss']
})
export class OrganisationsListListComponent implements OnInit {
  SimpleOrganizations$: Observable<SimpleOrganization[]>

  constructor(private pageService: OrganisationsListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadOrganisations();

    this.SimpleOrganizations$.subscribe(x => console.log(x));
  }

  loadOrganisations(){
    this.SimpleOrganizations$ = this.pageService.getOrganisations();
  }

  goCreateOrg(){
    this.router.navigate(["/c-o"])
  }
}
