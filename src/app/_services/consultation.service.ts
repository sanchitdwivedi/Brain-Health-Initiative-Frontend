import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { ConsultationCard } from '../interfaces/ConsultationCard';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private httpClient: HttpClient) { }

  public createConsultationForm(form: any){
    return this.httpClient.post(`${baseUrl}/consultation`, form);
  }

  public getAllConsultationForms(){
    return this.httpClient.get(`${baseUrl}/consultation`);
  }
}
