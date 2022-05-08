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
    return this.httpClient.post(`${baseUrl}/doctor`, doctorDetail);
  }

  public updateDoctor(id: any, doctorDetail: any){
    return this.httpClient.put(`${baseUrl}/doctor/update/${id}`, doctorDetail);
  }

  public deleteDoctor(id: any){
    return this.httpClient.delete(`${baseUrl}/doctor/${id}`);
  }

  public getRole(id: any){
    return this.httpClient.get(`${baseUrl}/role/${id}`);
  }

  public getRoles(){
    return this.httpClient.get(`${baseUrl}/role`);
  }

  // public addRole(roleDetail: any){
  //   return this.httpClient.post(`${baseUrl}/role`, roleDetail.value);
  // }

  public updateRole(id: any, roleDetail: any){
    return this.httpClient.put(`${baseUrl}/role/${id}`, roleDetail);
  }

  public deleteRole(id: any){
    return this.httpClient.delete(`${baseUrl}/role/${id}`);
  }

  public getLevel(id: any){
    return this.httpClient.get(`${baseUrl}/level/${id}`);
  }

  public getLevels(){
    return this.httpClient.get(`${baseUrl}/level`);
  }

  // public addLevel(levelDetail: any){
  //   return this.httpClient.post(`${baseUrl}/level`, levelDetail.value);
  // }

  public updateLevel(id: any, levelDetail: any){
    return this.httpClient.put(`${baseUrl}/level/${id}`, levelDetail);
  }

  public deleteLevel(id: any){    
    return this.httpClient.delete(`${baseUrl}/level/${id}`);
  }

  public getHospital(id: any){
    return this.httpClient.get(`${baseUrl}/hospital/${id}`);
  }

  public getHospitals(){
    return this.httpClient.get(`${baseUrl}/hospital`);
  }

  public addHospital(hospitalDetail: any){
    return this.httpClient.post(`${baseUrl}/hospital`, hospitalDetail);
  }

  public updateHospital(id: any, hospitalDetail: any){
    return this.httpClient.put(`${baseUrl}/hospital/${id}`, hospitalDetail);
  }

  public deleteHospital(id: any){
    return this.httpClient.delete(`${baseUrl}/hospital/${id}`);
  }

  public getAdmin(id: any){
    return this.httpClient.get(`${baseUrl}/admin/${id}`);
  }

  public getAdmins(){
    return this.httpClient.get(`${baseUrl}/admin`);
  }

  public addAdmin(adminDetail: any){
    return this.httpClient.post(`${baseUrl}/admin`, adminDetail);
  }

  public updateAdmin(id: any, adminDetail: any){
    return this.httpClient.put(`${baseUrl}/admin/update/${id}`, adminDetail);
  }

  public deleteAdmin(id: any){
    return this.httpClient.delete(`${baseUrl}/admin/${id}`);
  }
}
