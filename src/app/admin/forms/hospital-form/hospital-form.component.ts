import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospital } from 'src/app/interfaces/Hospital';
import { Level } from 'src/app/interfaces/Level';
import { AdminService } from 'src/app/_services/admin.service';
import swal from 'sweetalert2';

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
  levelName: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) private operationAndDate: any,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    // this.getLevels();
    if (operationAndDate.operation === 'add') {
      this.add = true;
    } else if (operationAndDate.operation === 'update') {
      this.update = true;
    }
    this.hospitalDetail = operationAndDate.element;
    if (!this.add) {
      switch (this.hospitalDetail.level.levelName) {
        case "phc":
          this.levelName = "Primary Healthcare Center"
          break;
        case "shc":
          this.levelName = "Secondary Healthcare Center"
          break;
        case "thc":
          this.levelName = "Tertiary Healthcare Center"
      }
    }
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
    this.adminService.addHospital(this.hospital).subscribe({
      next: (response: any) => {
        // console.log(response);
        swal.fire({
          text:'Hospital is being Added!',
          icon:'success'
        })
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updateHospital(hospitalDetails: any) {
    for (var level of this.levels) {
      if (level.levelName == hospitalDetails.value.levelName) {
        this.level.levelId = level.levelId;
        break;
      }
    }
    this.level.levelName = hospitalDetails.value.levelName;

    this.hospital.level = this.level;
    this.hospital.hospitalName = hospitalDetails.value.hospitalName;
    this.hospital.state = hospitalDetails.value.state;
    this.hospital.city = hospitalDetails.value.city;
    this.hospital.pincode = hospitalDetails.value.pincode;
    this.hospital.district = hospitalDetails.value.district;
    console.log(this.hospital);
    this.adminService.updateHospital(this.hospitalDetail.hospitalId, this.hospital).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
