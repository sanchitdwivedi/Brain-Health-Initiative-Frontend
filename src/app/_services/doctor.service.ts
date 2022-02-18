import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { DoctorAuthService } from './doctor-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  PATH_OF_API = "http://localhost:9090";
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

  public specialist(){
    return this.httpClient.get(`${baseUrl}/doctor/specialist`, {
      responseType: 'text'
    });
  }

  public medicalOfficer(){
    return this.httpClient.get(`${baseUrl}/doctor/medical-officer`, {
      responseType: 'text'
    });
  }
}
