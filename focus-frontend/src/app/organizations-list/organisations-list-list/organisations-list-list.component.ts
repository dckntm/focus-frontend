import { Component, OnInit } from '@angular/core';
import { SimpleOrganization } from 'src/app/models/simple-organisation';
import { Observable } from 'rxjs';
import { OrganisationsListService } from '../../servises/organisations-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';

class Org{
  id: string;
  title: string;
  members: string[];
}

@Component({
  selector: 'app-organisations-list-list',
  templateUrl: './organisations-list-list.component.html',
  styleUrls: ['./organisations-list-list.component.scss']
})
export class OrganisationsListListComponent implements OnInit {
  SimpleOrganizations$: Observable<SimpleOrganization[]>
  show: boolean = false;

  sOrgs: SimpleOrganization[];

  org:Org[] = [];

  constructor(private pageService: OrganisationsListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadOrganisations();

  }

  loadOrganisations(){
    this.pageService.getOrganisations().subscribe(x => this.processOrgs(x))
  }

  processOrgs(arr: SimpleOrganization[]){
    this.sOrgs = arr;
    this.sOrgs.forEach(organization => {
      this.pageService.getOrgInfo(organization.id).subscribe(x => this.createOrgModel(x))
    })
  }

  createOrgModel(org: Organization){
    this.org.push({id: org.id, title: org.title, members: org.members});
    console.log(this.org)
  }

  goCreateUser(){
    this.router.navigate(["/c-u"])
  }

  goCreateOrg(){
    this.router.navigate(["/c-o"])
  }

  showInfo(){
    this.show = !this.show
    console.log(this.show)
  }
}
