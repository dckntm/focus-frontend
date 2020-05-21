import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servises/authentication.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
