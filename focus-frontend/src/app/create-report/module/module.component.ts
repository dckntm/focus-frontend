import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  value: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
