import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.sass']
})
export class DashboardListComponent implements OnInit {

  hosts = ['Hejsan', 'Hojsan'];

  constructor() {
  }

  ngOnInit() {
  }

}
