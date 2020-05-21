import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/servises/navigation.service';
import { ShortReportInfo } from 'src/app/models/short-organisation';
import { AuthenticationService } from 'src/app/servises/authentication.service';

class loseOrg{
  title: string;
  overdueReps: number;
}

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {
  reports: ShortReportInfo[];
  passedReps: number = 0;
  overdueReps = 0;
  inProgressReps = 0;
  passedStatus = "";
  overdueStatus = "";
  inProgressStatus = "";
  looserOrgs: loseOrg[] = [];
  freeTemplates = 0;
  schedules = 0;
  repType: string[] = [];

  constructor(private router: Router, private navigationService:NavigationService, private auth: AuthenticationService) { }

  ngOnInit(): void {
      this.navigationService.getAllReports().subscribe(reports => {  
      console.log(reports)  
      this.checkRep(reports);
      this.navigationService.getAllOrgs().subscribe(orgs => {
        console.log(orgs)
        this.getLoosOrgs(reports, orgs)
      })
    });
    this.navigationService.getAllTemplates().subscribe(x => {
      this.schedules = x.length;
      console.log(x)
    });
    console.log(this.auth.userIsAdmin)
  }

  //check status of reports
  checkRep(x){
    let passed = 0;
    let overdue = 0;
    let progress = 0;
    x.forEach(report => {

      if(report.reportStatus == "Passed"){
        passed += 1;
      }
      if(report.reportStatus == "Overdue"){
        overdue += 1;
      }
      if(report.reportStatus == "InProgress"){
        
        progress += 1;
      }
    }); 
    console.log(passed);
    console.log(progress)
    this.passedReps = passed;
    this.overdueReps = overdue;
    this.inProgressReps = progress;
    console.log(this.passedReps, this.overdueReps, this.inProgressReps);

    if(this.passedReps == 0 || this.passedReps >= 5){
      this.passedStatus = "Сдано " + this.passedReps + " отчётов"
    } else {
      if(this.passedReps == 1){
        this.passedStatus = "Сдан " + this.passedReps + " отчёт"
      }else{
        if(this.inProgressReps>=2 || this.inProgressReps<= 4)
        this.passedStatus = "Сдано " + this.passedReps + " отчёта"
      }
    }

    if(this.overdueReps <= 0 || this.overdueReps >= 5){
      this.overdueStatus = "Просрочено " + this.overdueReps + " отчётов"
    } else {
      if(this.overdueReps == 1){
        this.overdueStatus = "Просрочен " + this.overdueReps + " отчёт"
      }else{
        this.overdueStatus = "Просрочен " + this.overdueReps + " отчёта"     
      }
    }

    if(this.inProgressReps == 0 || this.inProgressReps >= 5){
      this.inProgressStatus = "Не завершено " + this.inProgressReps + " отчётов"
    } else {
      if(this.inProgressReps == 1){
        this.inProgressStatus = "Не завершён " + this.inProgressReps + " отчёт"
      }else{
        this.inProgressStatus = "Не завершено " + this.inProgressReps + " отчёта"
      }
    }
  }

  //get organizations with overdue reports
  getLoosOrgs(reports, orgs){
    reports.forEach(report => {
      if(report.reportStatus == "Overdue"){
        orgs.forEach(organization => {
          if (organization.id == report.assignedOrganizationId){
            this.looserOrgs.forEach(currentOrg =>{
              if(currentOrg.title == organization.title){
                console.log("smth")
                currentOrg.overdueReps += 1;
              } else {
                console.log("smth")
                this.looserOrgs.push({title: organization.title, overdueReps: 1})
              }
            })
            if(this.looserOrgs.length == 0){
              this.looserOrgs.push({title: organization.title, overdueReps: 1})
            }
          }
        })
      }
    })
    console.log(this.looserOrgs);
    this.looserOrgs.forEach(org => {
      if(org.overdueReps >= 5){
        this.repType.push("отчётов")
      } else {
        if (org.overdueReps == 1){
          this.repType.push("отчёт")
        } else {
          this.repType.push("отчёта")
        }
      }
    })
  }

  goReports(){
    this.router.navigate(["/admin-reports"])
  }

  goOrganizations(){
    this.router.navigate(["/organizations"])
  }

  goTimetables(){
    this.router.navigate(["/timetable-list"])
  }
}
