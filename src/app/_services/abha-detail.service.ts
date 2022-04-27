import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbhaDetailService {

  response: any

  constructor(private httpClient: HttpClient) { }
  
  public getPatientConsultationByAbhaId(abhaId: string){
    return this.httpClient.get(`${baseUrl}/consultation/${abhaId}`);
  }
  
  public getPatientConsultationByMobileNo(mobileNumber: string){
    return this.httpClient.get(`${baseUrl}/patient/mobile/${mobileNumber}`);
  }

  public getPatientByMobileAndName(name: string, mobile: number){
    return this.httpClient.get(`${baseUrl}/patient/name/${name}/mobile/${mobile}`);
  }
}
