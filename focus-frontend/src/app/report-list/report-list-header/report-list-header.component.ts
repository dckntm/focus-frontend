import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list-header',
  templateUrl: './report-list-header.component.html',
  styleUrls: ['./report-list-header.component.scss']
})
export class ReportListHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goNav(){
    this.router.navigate(["/navigation"])
  }

}
