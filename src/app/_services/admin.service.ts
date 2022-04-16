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
    console.log("addDoctor: ", doctorDetail);
    return this.httpClient.post(`${baseUrl}/doctor`, doctorDetail);
  }

  public updateDoctor(doctorDetail: any){
    return this.httpClient.put(`${baseUrl}/doctor`, doctorDetail.value);
  }

  public deleteDoctor(id: any){
    console.log("doctorLevel: ", id);
    return this.httpClient.delete(`${baseUrl}/doctor/${id}`);
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

  public deleteRole(id: any){
    console.log("roleLevel: ", id);
    return this.httpClient.delete(`${baseUrl}/role/${id}`);
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

  public deleteLevel(id: any){    
    console.log("deleteLevel: ", id);
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

  public updateHospital(hospitalDetail: any){
    return this.httpClient.put(`${baseUrl}/hospital`, hospitalDetail);
  }

  public deleteHospital(id: any){
    console.log("deleteHospital: ", id);
    return this.httpClient.delete(`${baseUrl}/hospital/${id}`);
  }

  public getAdmin(id: any){
    return this.httpClient.get(`${baseUrl}/admin/${id}`);
  }

  public getAdmins(){
    return this.httpClient.get(`${baseUrl}/admin`);
  }

  public addAdmin(adminDetail: any){
    return this.httpClient.post(`${baseUrl}/admin`, adminDetail.value);
  }

  public updateAdmin(adminDetail: any){
    return this.httpClient.put(`${baseUrl}/admin`, adminDetail.value);
  }

  public deleteAdmin(id: any){
    console.log("deleteAdmin: ", id);
    return this.httpClient.delete(`${baseUrl}/admin/${id}`);
  }
}
