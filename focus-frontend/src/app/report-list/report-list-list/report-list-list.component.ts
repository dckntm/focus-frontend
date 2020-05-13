import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortReportInfo } from 'src/app/models/short-organisation';
import { ReportListService } from 'src/app/servises/report-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servises/authentication.service';
import { OrganisationsListService } from 'src/app/servises/organisations-list.service';
import { SimpleOrganization } from 'src/app/models/simple-organisation';

class OrgReports {
  orgTitle:string;
  reports:ShortReportInfo[];
}

@Component({
  selector: 'app-report-list-list',
  templateUrl: './report-list-list.component.html',
  styleUrls: ['./report-list-list.component.scss']
})
export class ReportListListComponent implements OnInit {
  reports$: Observable<ShortReportInfo[]>
  organizations$: Observable<SimpleOrganization[]>
  isAdmin: boolean;
  isNotAdmin: boolean;

  composedReports: OrgReports[]

  constructor(
    private pageService: ReportListService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private auth: AuthenticationService,
    private orgService: OrganisationsListService) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.userIsAdmin;
    this.isNotAdmin = !this.auth.userIsAdmin
    console.log(this.isAdmin);
    console.log(this.isNotAdmin)
    
    this.loadReports();
    this.reports$.subscribe(x => {
      console.log(x)
      if(true)
    {
      // call & get short organization infos
      this.organizations$ = this.orgService.getOrganisations();
      this.composedReports = [];

      this.organizations$.subscribe(orgs => {
        console.log(orgs);
        
        orgs.forEach(org => {
          let orgReports = new OrgReports;
          
          orgReports.orgTitle = org.title;
          orgReports.reports = [] as ShortReportInfo[];

          // maybe wrong
          
            x.forEach(report => {
              console.log("report: " + report.assignedOrganizationId + " org: " + org.id)
              if (report.assignedOrganizationId == org.id) {
                orgReports.reports.push(report);
              }
            });
          

          console.log(orgReports);

          this.composedReports.push(orgReports);
        });
      })
    }
    });

    
  }

  loadReports(){

    if (this.isAdmin)
    {
      this.reports$ = this.pageService.getAllReports();
    } else {
      this.reports$ = this.pageService.getOrganisations();
    }
  }

  goCreateReport(){
    this.router.navigate(["/create-report"])
  }

  goReport(id){
    this.router.navigate(["/report/" + id])
  }

}
