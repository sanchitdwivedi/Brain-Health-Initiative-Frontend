import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/interfaces/Patient';

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
