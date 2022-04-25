import { Injectable } from '@angular/core';
import { ConsultationCard } from '../interfaces/ConsultationCard';
import { Doctor } from '../interfaces/Doctor';
import { Hospital } from '../interfaces/Hospital';
import { AdminService } from './admin.service';
import { ConsultationService } from './consultation.service';
import { DoctorService } from './doctor.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private consultationService: ConsultationService,
              private adminService: AdminService) { }

  consultationForms: ConsultationCard[];
  doctors: Doctor[];
  hospitals: Hospital[];

  async getConsultationFormData(){
    let data: any;
    data = await this.consultationService.getAllConsultationForms().toPromise();
    this.consultationForms = data;
    return this.consultationForms;
  }

  async getDoctorsData(){
    let data: any;
    data = await this.adminService.getDoctors().toPromise();
    this.doctors = data;
    return data;
  }

  async getHospitalsData(){
    let data: any;
    data = await this.adminService.getHospitals().toPromise();
    this.hospitals = data;
    return data;
  }

  patientsVisitedInAnYear(date: Date){
    return this.consultationForms.filter(c => new Date(c.dateAndTime).getFullYear() == date.getFullYear());
  }

  questionnairesUsedInAnYear(date: Date){
    return this.consultationForms.filter(c => (new Date(c.dateAndTime).getFullYear() == date.getFullYear() && c.questionnaireResponse.length>0));
  }

  getAllDoctors(){
    return this.doctors;
  }

  patientsCuredInAnYear(date: Date){
    return this.consultationForms.filter(c=> (new Date(c.dateAndTime).getFullYear() == date.getFullYear() && c.diagnosistype==='FINAL'));
  }

  getPatientsByMonth(){
    let data = [];
    for(let i=0; i<12; i++){
      let curr=0;
      this.consultationForms.forEach(form => {
        if(i===(new Date(form.dateAndTime).getMonth())){
          curr++;
        }
      });
      data.push(curr);
    }
    return data;
  }
  
}
