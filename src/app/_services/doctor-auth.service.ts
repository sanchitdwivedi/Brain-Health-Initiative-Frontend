import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {

  constructor() { }

  public setRole(role: string){
    localStorage.setItem("role", role);
  }

  public getRole(): any{
    return localStorage.getItem("role");
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): any{
    return localStorage.getItem("jwtToken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRole() && this.getToken();
  }
}
