import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stats-district',
  templateUrl: './stats-district.component.html',
  styleUrls: ['./stats-district.component.css']
})
export class StatsDistrictComponent implements OnInit {
  @Input() district: string;

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    
  };
  public radarChartLabels: Label[] = ['Hospitals', 'Doctors', 'Patients'];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: '-' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.district==='Bangalore'){
      this.radarChartData = [{ data: [65, 59, 90], label: 'Bangalore stats' }];
    }
    else if(this.district==='Ropar'){
      this.radarChartData = [{ data: [50, 40, 10], label: 'Ropar stats' }];
    }
  }

}
