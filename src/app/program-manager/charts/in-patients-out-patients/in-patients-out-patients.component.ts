import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-in-patients-out-patients',
  templateUrl: './in-patients-out-patients.component.html',
  styleUrls: ['./in-patients-out-patients.component.css']
})
export class InPatientsOutPatientsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 43, 20, 30, 60, 50], label: 'Out Patients' },
    { data: [35, 50, 30, 90, 100, 30, 40, 20, 40, 30, 80, 20], label: 'In Patients' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
