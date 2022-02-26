import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbhaDetailService {

  constructor(private httpClient: HttpClient) { }

  public getPatientConsultation(abhaId: String){
    console.log("getPatientConsultation Called");
    return this.httpClient.get(`${baseUrl}/consultation/${abhaId}`);
  }
}
