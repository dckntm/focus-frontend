import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servises/authentication.service';

@Component({
  selector: 'app-report-list-header',
  templateUrl: './report-list-header.component.html',
  styleUrls: ['./report-list-header.component.scss']
})
export class ReportListHeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }
  

}
