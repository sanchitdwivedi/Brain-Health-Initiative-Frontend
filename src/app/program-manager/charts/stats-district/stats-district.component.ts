import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ConsultationCard } from 'src/app/interfaces/ConsultationCard';
import { Doctor } from 'src/app/interfaces/Doctor';
import { Hospital } from 'src/app/interfaces/Hospital';
import { StatsService } from 'src/app/_services/stats.service';

@Component({
  selector: 'app-stats-district',
  templateUrl: './stats-district.component.html',
  styleUrls: ['./stats-district.component.css']
})
export class StatsDistrictComponent implements OnInit {
  @Input() district: string;
  hospitals: Hospital[];
  consultationForms: ConsultationCard[];
  doctors: Doctor[];

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    
  };
  public radarChartLabels: Label[] = ['Hospitals', 'Doctors', 'Patients'];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: '-' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor(private statsService: StatsService) { }

  async ngOnInit() {
    this.consultationForms = await this.statsService.getConsultationFormData();
    this.doctors = await this.statsService.getDoctorsData();
    this.hospitals = await this.statsService.getHospitalsData();
  }

  async ngOnChanges() {
    if(this.consultationForms===undefined){
      this.consultationForms = await this.statsService.getConsultationFormData();
      this.doctors = await this.statsService.getDoctorsData();
      this.hospitals = await this.statsService.getHospitalsData();
    }

    let hospitalData = new Set<number>();
    this.hospitals.forEach(hospital => {
      if(hospital.district===this.district) hospitalData.add(hospital.hospitalId);
    });

    let doctorData = new Set<number>();
    this.doctors.forEach(doctor => {
      let currentHospital = doctor.hospital;
      if(hospitalData.has(currentHospital.hospitalId)){
        doctorData.add(doctor.uuid);
      }
    });

    let patientData = new Set<number>();
    this.consultationForms.forEach(form => {
      let currentHospital = form.hospital;
      if(hospitalData.has(currentHospital.hospitalId)){
        patientData.add(form.formId);
      }
    });

    if(this.district.length>0){
      this.radarChartData = [{ 
        data: [Math.round((hospitalData.size/this.hospitals.length + Number.EPSILON) * 100)/100, 
                Math.round((doctorData.size/this.doctors.length + Number.EPSILON) * 100)/100, 
                Math.round((patientData.size/this.consultationForms.length + Number.EPSILON) * 100)/100], 
        label: `${this.district} stats` 
      }];
    }
  }

}
