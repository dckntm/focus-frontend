import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisations-list-header',
  templateUrl: './organisations-list-header.component.html',
  styleUrls: ['./organisations-list-header.component.scss']
})
export class OrganisationsListHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goNav(){
    this.router.navigate(["/navigation"])
  }

}
