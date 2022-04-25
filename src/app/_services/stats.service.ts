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

  async getData(){
    let data: any;
    data = await this.consultationService.getAllConsultationForms().toPromise();
    this.consultationForms = data;

    data = await this.adminService.getDoctors().toPromise();
    this.doctors = data;

    data = await this.adminService.getHospitals().toPromise();
    this.hospitals = data;
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
    return this.consultationForms.filter(c=> (new Date(c.dateAndTime).getFullYear() == date.getFullYear() && c.improvementtype==='CONDITION_IMPROVED'));
  }
  
}
