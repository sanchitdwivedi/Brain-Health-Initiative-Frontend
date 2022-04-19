import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stats-city',
  templateUrl: './stats-city.component.html',
  styleUrls: ['./stats-city.component.css']
})
export class StatsCityComponent implements OnInit {

  @Input() city: string;

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  public radarChartLabels: Label[] = ['Hospitals', 'Doctors', 'Patients'];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: '-', backgroundColor: 'rgba(251, 183, 255, 0.8)', borderColor: 'rgba(249, 130, 255, 0.8)' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.city==='Nangal'){
      this.radarChartData[0].data = [65, 59, 90];
      this.radarChartData[0].label = 'Nangal stats';
    }
    else if(this.city==='Chandigarh'){
      this.radarChartData[0].data = [50, 40, 10];
      this.radarChartData[0].label = 'Chandigarh stats';
    }
  }

}
