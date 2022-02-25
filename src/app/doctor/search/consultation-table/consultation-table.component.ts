import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrls: ['./consultation-table.component.css']
})
export class ConsultationTableComponent implements OnInit {

  rows = [
    {
      name:"Khushal",
      mob:9099999
    },{
      name:"JP",
      mob:8088888
    },{
      name: "Prachi",
      mob:7077777,
    },{
      name: "Sanchita",
      mob:6066666,
    }
  ]
  elements: any = [];
  ngOnInit() {
  }
}
