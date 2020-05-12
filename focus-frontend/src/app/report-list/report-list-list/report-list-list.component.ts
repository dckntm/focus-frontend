import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortOrganisation } from 'src/app/models/short-organisation';
import { ReportListService } from 'src/app/servises/report-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-list-list',
  templateUrl: './report-list-list.component.html',
  styleUrls: ['./report-list-list.component.scss']
})
export class ReportListListComponent implements OnInit {
  ShortOrganisations$: Observable<ShortOrganisation[]>

  constructor(private pageService: ReportListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadReports();

    this.ShortOrganisations$.subscribe(x => console.log(x));
  }

  loadReports(){
    this.ShortOrganisations$ = this.pageService.getOrganisations()
  }

}
