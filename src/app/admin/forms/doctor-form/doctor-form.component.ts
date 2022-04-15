import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from 'src/app/interfaces/Doctor';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})

export class DoctorFormComponent implements OnInit {
  doctorForm: FormGroup;
  levels: any = [];
  roles: any = [];
  hospitals: any = [];
  readonly: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public doctorDetail: Doctor,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    this.doctorDetail = doctorDetail;
    this.doctorForm = this.fb.group({
      doctor: this.fb.group({
        userId: [''],
        password: [''],
        confirmPassword: [''],
        role: this.fb.group({
          roleName: ['']
        })
      }),
      firstName: [''],
      lastName: [''],
      gender: [''],
      district: [''],
      state: [''],
      city: [''],
      pincode: [''],
      mobileNo: [''],
      email: [''],
      hospital: this.fb.group({
        hospitalId: ['']
      })
    });

  }

  ngOnInit(): void {
    this.getLevels();
    this.getRoles();
    this.getHospitals();
    console.log(this.doctorDetail);
    this.doctorForm.value.userId = 'khushal';
  }

  public get doctor(): FormGroup {
    return this.doctorForm.get('doctor') as FormGroup;
  }

  public get role(): FormGroup {
    return this.doctor.get('role') as FormGroup;
  }

  public get hospital(): FormGroup {
    return this.doctorForm.get('hospital') as FormGroup;
  }


  getLevels() {
    this.levels = this.adminService.getLevels().subscribe({
      next: (response: any) => {
        this.levels = response;
        console.log("Level: ", response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getRoles() {
    this.roles = this.adminService.getRoles().subscribe({
      next: (response: any) => {
        this.roles = response;
        console.log("roles", this.roles)
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getHospitals() {
    this.hospitals = this.adminService.getHospitals().subscribe({
      next: (response: any) => {
        this.hospitals = response;
        console.log(this.hospitals);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}