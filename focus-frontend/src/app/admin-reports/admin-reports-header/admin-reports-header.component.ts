import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-reports-header',
  templateUrl: './admin-reports-header.component.html',
  styleUrls: ['./admin-reports-header.component.scss']
})
export class AdminReportsHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goNav(){
    this.router.navigate(["/navigation"])
  }

}
