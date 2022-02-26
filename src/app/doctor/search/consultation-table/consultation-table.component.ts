import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrls: ['./consultation-table.component.css']
})
export class ConsultationTableComponent implements OnInit {

  @Input() reports: any;

  elements: any = [];
  ngOnInit() {
  }
}
