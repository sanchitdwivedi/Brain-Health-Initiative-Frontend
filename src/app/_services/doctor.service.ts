import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { DoctorAuthService } from './doctor-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  requestHeaders = new HttpHeaders(
    { "No-Auth":"True" }
  );

  constructor(private httpClient: HttpClient,
              private doctorAuthService: DoctorAuthService) { }

  public login(loginData: any){
    return this.httpClient.post(`${baseUrl}/authenticate`, loginData, { headers: this.requestHeaders });
  }

  public roleMatch(allowedRole: string): boolean{
    const role: string = this.doctorAuthService.getRole();
    if(role!==null && role && role===allowedRole){
      return true;
    }
    return false;
  }

  public updatePassword(id: any, password: any){
    console.log(password);
    return this.httpClient.put(`${baseUrl}/doctor/${id}`, password);
  }

  public createPatient(patientData: any){
    return this.httpClient.post(`${baseUrl}/patient`, patientData);
  }
}
