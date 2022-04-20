import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {
  
  constructor(private httpClient: HttpClient) { }

  public getDetail(abhaId: String){
    // console.log("getDetail Called");
    return this.httpClient.get(`${baseUrl}/NHR/${abhaId}`)
  }

  public getPatientByAbhaId(id: string){
    return this.httpClient.get(`${baseUrl}/patient/${id}`);
  }
}
