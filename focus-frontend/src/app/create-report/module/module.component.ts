import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  clear() {
    throw new Error("Method not implemented.");
  }
  value: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
