import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from 'src/app/interfaces/Doctor';
import { Hospital } from 'src/app/interfaces/Hospital';
import { Role } from 'src/app/interfaces/Role';
import { User } from 'src/app/interfaces/User';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})

export class DoctorFormComponent implements OnInit {
  update: boolean = false;
  add: boolean = false;
  firstGender: boolean = true;
  doctorForm: FormGroup;
  levels: any = [];
  roles: any = [];
  hospitals: any = [];
  readonly: boolean;
  role: Role = ({} as any) as Role;
  user: User = ({} as any) as User;
  hospital: Hospital = ({} as any) as Hospital;
  doctor: Doctor = ({} as any) as Doctor;
  doctorDetail: any

  constructor(
    @Inject(MAT_DIALOG_DATA) private operationAndDate: any,
    private adminService: AdminService
  ) {
    console.log("operationAndDate: ", operationAndDate);
    if (operationAndDate.operation === 'add') {
      this.add = true;
    } else if (operationAndDate.operation === 'update') {
      this.update = true;
    }
    this.doctorDetail = operationAndDate.element;
  }

  ngOnInit(): void {
    this.getLevels();
    this.getRoles();
    this.getHospitals();
  }

  getLevels() {
    this.levels = this.adminService.getLevels().subscribe({
      next: (response: any) => {
        this.levels = response;
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
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  addDoctor(doctorDetails: any) {
    if (doctorDetails.value.password === doctorDetails.value.confirmPassword) {

      this.role.roleName = doctorDetails.value.roleName;

      this.user.userId = doctorDetails.value.userId;
      this.user.role = this.role;
      this.user.password = doctorDetails.value.password;

      this.hospital.hospitalId = doctorDetails.value.hospitalId;

      this.doctor.doctor = this.user;
      this.doctor.hospital = this.hospital;

      this.doctor.firstName = doctorDetails.value.firstName;
      this.doctor.lastName = doctorDetails.value.lastName;
      this.doctor.city = doctorDetails.value.city;
      this.doctor.district = doctorDetails.value.district;
      this.doctor.state = doctorDetails.value.state;
      this.doctor.pincode = doctorDetails.value.pincode;
      this.doctor.mobileNo = doctorDetails.value.mobileNo;
      this.doctor.gender = doctorDetails.value.gender;
      this.doctor.email = doctorDetails.value.email;

      console.log("this.doctor: ", this.doctorDetail);
      this.adminService.addDoctor(this.doctor).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      alert('Passwords do not match!');
    }
  }

  updateDoctor(doctorDetails: any) {
    console.log(doctorDetails.value, this.doctorDetail);
      // this.role.roleName = doctorDetails.value.roleName;

      this.user.uuid = this.doctorDetail.doctor.uuid;
      // this.user.role = this.role;
      // this.user.password = doctorDetails.value.password;

      this.hospital.hospitalId = doctorDetails.value.hospitalId;

      // this.doctor.doctor.uuid = this.doctorDetail.doctor.uuid;
      this.doctor.hospital = this.hospital;

      this.doctor.doctor = this.user;
      this.doctor.firstName = doctorDetails.value.firstName;
      this.doctor.lastName = doctorDetails.value.lastName;
      this.doctor.city = doctorDetails.value.city;
      this.doctor.district = doctorDetails.value.district;
      this.doctor.state = doctorDetails.value.state;
      this.doctor.pincode = doctorDetails.value.pincode;
      this.doctor.mobileNo = doctorDetails.value.mobileNo;
      this.doctor.gender = doctorDetails.value.gender;
      this.doctor.email = doctorDetails.value.email;

      console.log("this.doctor: ", this.doctor);
      this.adminService.updateDoctor(this.doctor.doctor.uuid, this.doctor).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }
}