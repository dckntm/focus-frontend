import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShortReportInfo } from 'src/app/models/short-organisation';
import { Observable } from 'rxjs';
import { SimpleOrganization } from 'src/app/models/simple-organisation';
import { AdminReportsService } from 'src/app/servises/admin-reports.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servises/authentication.service';
import { OrganisationsListService } from 'src/app/servises/organisations-list.service';

class OrgReports {
  orgTitle:string;
  reports:ShortReportInfo[];
}

@Component({
  selector: 'app-admin-reports-list',
  templateUrl: './admin-reports-list.component.html',
  styleUrls: ['./admin-reports-list.component.scss']
})
export class AdminReportsListComponent implements OnInit {

  reports$: Observable<ShortReportInfo[]>
  organizations$: Observable<SimpleOrganization[]>
  isAdmin: boolean;
  isNotAdmin: boolean;
  composedReports: OrgReports[];
  color: number[] = [];

  constructor(
    private pageService: AdminReportsService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private orgService: OrganisationsListService) { }

    @ViewChild("element") pass: ElementRef[];

    ngOnInit(): void {
      
      this.loadReports();
      this.reports$.subscribe(x => {
        console.log(x)
        if(true)
      {
        // call & get short organization infos
        this.organizations$ = this.orgService.getOrganisations();
        this.composedReports = [];
  
        this.organizations$.subscribe(orgs => {
          
          orgs.forEach(org => {
            let orgReports = new OrgReports;
            
            orgReports.orgTitle = org.title;
            orgReports.reports = [] as ShortReportInfo[];
  
            // maybe wrong
            
              x.forEach(report => {
                if (report.assignedOrganizationId == org.id) {
                  orgReports.reports.push(report);
                  if (report.reportStatus == "Overdue"){
                    this.color.push(1)
                  } else {
                    if (report.reportStatus == "Passed"){
                      this.color.push(0)
                    } else {
                      this.color.push(2)
                    }
                  }
                }
                
              });
            
  
            console.log(orgReports);
            console.log(this.color)
  
            this.composedReports.push(orgReports);

          });
        })
      }
      // this.composedReports.forEach(report => {
      //   report.reports.forEach(rep => {
      //     if(rep.reportStatus == "Overdue"){
      //       this.pass[this.index].nativeElement.styles == "{border-left: 20px solid red;}";
      //     }
      //   })
      // })


      });
  
      
    }
  
    loadReports(){
      this.reports$ = this.pageService.getAllReports()
    }

  

  goCreateReport(){
    this.router.navigate(["/create-report"])
  }

  goReport(id){
    this.router.navigate(["/report/" + id])
  }
}
