import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospital } from 'src/app/interfaces/Hospital';
import { Level } from 'src/app/interfaces/Level';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css']
})
export class HospitalFormComponent implements OnInit {
  @Input() tableName: string;
  update: boolean = false;
  add: boolean = false;
  hospitalDetail: any;
  levels: any = [];
  level: Level = ({} as any) as Level;
  hospital: Hospital = ({} as any) as Hospital;
  constructor(
    @Inject(MAT_DIALOG_DATA) private operationAndDate: any,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    console.log("operationAndDate: ", operationAndDate.element);
    if (operationAndDate.operation === 'add') {
      this.add = true;
    } else if (operationAndDate.operation === 'update') {
      this.update = true;
    }
    this.hospitalDetail = operationAndDate.element;
  }

  ngOnInit(): void {
    this.getLevels();
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

  addHospital(hospitalDetails: any) {
    
    this.level.levelName = hospitalDetails.value.levelName;

    this.hospital.level = this.level;
    this.hospital.hospitalName = hospitalDetails.value.hospitalName;
    this.hospital.state = hospitalDetails.value.state;
    this.hospital.city = hospitalDetails.value.city;
    this.hospital.pincode = hospitalDetails.value.pincode;
    this.hospital.district = hospitalDetails.value.district;
    
    console.log("this.hospital: ", this.hospital);
    this.adminService.addHospital(this.hospital).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updateHospital(hospitalDetails: any) {
    
    this.level.levelName = hospitalDetails.value.levelName;

    this.hospital.level = this.level;
    this.hospital.hospitalName = hospitalDetails.value.hospitalName;
    this.hospital.state = hospitalDetails.value.state;
    this.hospital.city = hospitalDetails.value.city;
    this.hospital.pincode = hospitalDetails.value.pincode;
    this.hospital.district = hospitalDetails.value.district;

    console.log("this.hospital: ", this.hospital);
    this.adminService.updateHospital(this.hospital).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
