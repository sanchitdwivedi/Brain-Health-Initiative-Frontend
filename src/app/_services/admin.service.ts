import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  public getDoctor(id: any){
    return this.httpClient.get(`${baseUrl}/doctor/${id}`);
  }

  public getDoctors(){
    return this.httpClient.get(`${baseUrl}/doctor`);
  }

  public addDoctor(doctorDetail: any){
    return this.httpClient.post(`${baseUrl}/doctor`, doctorDetail.value);
  }

  public updateDoctor(doctorDetail: any){
    return this.httpClient.put(`${baseUrl}/doctor`, doctorDetail.value);
  }

  public deleteDoctor(doctorDetail: any){
    return this.httpClient.delete(`${baseUrl}/doctor`, doctorDetail.value);
  }

  public getRole(id: any){
    return this.httpClient.get(`${baseUrl}/role/${id}`);
  }

  public getRoles(){
    return this.httpClient.get(`${baseUrl}/role`);
  }

  public addRole(roleDetail: any){
    return this.httpClient.post(`${baseUrl}/role`, roleDetail.value);
  }

  public updateRole(roleDetail: any){
    return this.httpClient.put(`${baseUrl}/role`, roleDetail.value);
  }

  public deleteRole(roleDetail: any){
    return this.httpClient.delete(`${baseUrl}/role`, roleDetail.value);
  }

  public getLevel(id: any){
    return this.httpClient.get(`${baseUrl}/level/${id}`);
  }

  public getLevels(){
    return this.httpClient.get(`${baseUrl}/level`);
  }

  public addLevel(levelDetail: any){
    return this.httpClient.post(`${baseUrl}/level`, levelDetail.value);
  }

  public updateLevel(levelDetail: any){
    return this.httpClient.put(`${baseUrl}/level`, levelDetail.value);
  }

  public deleteLevel(levelDetail: any){
    return this.httpClient.delete(`${baseUrl}/level`, levelDetail.value);
  }

  public getHospital(id: any){
    return this.httpClient.get(`${baseUrl}/hospital/${id}`);
  }

  public getHospitals(){
    return this.httpClient.get(`${baseUrl}/hospital`);
  }

  public addHospital(hospitalDetail: any){
    return this.httpClient.post(`${baseUrl}/hospital`, hospitalDetail.value);
  }

  public updateHospital(hospitalDetail: any){
    return this.httpClient.put(`${baseUrl}/hospital`, hospitalDetail.value);
  }

  public deleteHospital(hospitalDetail: any){
    return this.httpClient.delete(`${baseUrl}/hospital`, hospitalDetail.value);
  }




}
