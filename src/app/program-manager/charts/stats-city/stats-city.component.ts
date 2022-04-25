import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ConsultationCard } from 'src/app/interfaces/ConsultationCard';
import { Doctor } from 'src/app/interfaces/Doctor';
import { Hospital } from 'src/app/interfaces/Hospital';
import { StatsService } from 'src/app/_services/stats.service';

@Component({
  selector: 'app-stats-city',
  templateUrl: './stats-city.component.html',
  styleUrls: ['./stats-city.component.css']
})
export class StatsCityComponent implements OnInit {

  @Input() city: string;
  hospitals: Hospital[];
  consultationForms: ConsultationCard[];
  doctors: Doctor[];

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  public radarChartLabels: Label[] = ['Hospitals', 'Doctors', 'Patients'];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: '-', backgroundColor: 'rgba(251, 183, 255, 0.8)', borderColor: 'rgba(249, 130, 255, 0.8)' }
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
      if(hospital.city===this.city) hospitalData.add(hospital.hospitalId);
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

    if(this.city.length>0){
      this.radarChartData[0].data = [Math.round((hospitalData.size/this.hospitals.length + Number.EPSILON) * 100)/100, 
                Math.round((doctorData.size/this.doctors.length + Number.EPSILON) * 100)/100, 
                Math.round((patientData.size/this.consultationForms.length + Number.EPSILON) * 100)/100];

      this.radarChartData[0].label = `${this.city} stats`;
    }
  }
}
