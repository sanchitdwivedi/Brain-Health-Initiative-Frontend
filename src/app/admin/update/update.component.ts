import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit { 
  @Input() tableName: string;
  addDoctorForm: FormGroup;
  addRoleForm: FormGroup;
  addLevelForm: FormGroup;
  addHospitalForm: FormGroup;
  levels: any = [];
  roles: any = [];
  hospitals: any = [];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {

    this.addDoctorForm = this.fb.group({
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

    // this.addRoleForm = this.fb.group({
    //   roleName: [''],
    //   roleDescription: ['']
    // });

    this.addLevelForm = this.fb.group({
      levelName: [''],
      levelDescription: ['']
    });

    this.addHospitalForm = this.fb.group({
      hospitalName: [''],
      pincode: [''],
      city: [''],
      state: [''],
      district: [''],
      level: this.fb.group({
        levelName: ['']
      }),
    });

  }

  ngOnInit(): void {
    // this.addRoleForm = this.adminService.getRole();
    // this.getLevels();
    // this.getRoles();
    // this.getHospitals();
    // console.log(this.levels);

  }

//   public get doctor(): FormGroup {
//     return this.addDoctorForm.get('doctor') as FormGroup;
//   }

//   public get role(): FormGroup {
//     return this.doctor.get('role') as FormGroup;
//   }

//   public get hospital(): FormGroup {
//     return this.addDoctorForm.get('hospital') as FormGroup;
//   }

//   public get levelForm(): FormGroup {
//     return this.addHospitalForm.get('level') as FormGroup;
//   }



//   //Needed: Error Here
//   getLevels() {
//     this.levels = this.adminService.getLevel().subscribe({
//       next: (response: any) => {
//         this.levels = response;
//         console.log("Level: ", response);
//       },
//       error: (error: any) => {
//         console.log(error);
//       }
//     });
//   }

//   getRoles() {
//     this.roles = this.adminService.getRole().subscribe({
//       next: (response: any) => {
//         this.roles = response;
//         console.log("roles", this.roles)
//       },
//       error: (error: any) => {
//         console.log(error);
//       }
//     });
//   }

//   getHospitals() {
//     this.hospitals = this.adminService.getHospital().subscribe({
//       next: (response: any) => {
//         this.hospitals = response;
//         console.log(this.hospitals);
//       },
//       error: (error: any) => {
//         console.log(error);
//       }
//     })
//   }

//   updateDoctor() {
//     console.log(this.addDoctorForm.value);
//     if (this.doctor.value.password === this.doctor.value.confirmPassword) {
//       this.adminService.addDoctor(this.addDoctorForm).subscribe({
//         next: (response: any) => {
//           console.log(response);
//         },
//         error: (error: any) => {
//           console.log(error);
//         }
//       });
//     } else {
//       alert('Passwords do not match!');
//     }
//   }

//   updateRole() {
//     this.adminService.addRole(this.addRoleForm).subscribe({
//       next: (response: any) => {
//         console.log(response);
//       },
//       error: (error: any) => {
//         console.log(error);
//       }
//     });
//     this.getRoles();
//   }

//   updateLevel() {
//     this.adminService.addLevel(this.addLevelForm).subscribe({
//       next: (response: any) => {
//         console.log(response);
//       },
//       error: (error: any) => {
//         console.log(error);
//       }
//     });
//     this.getLevels();
//   }

//   updateHospital() {
//     this.adminService.addHospital(this.addHospitalForm).subscribe({
//       next: (response: any) => {
//         console.log(response);
//       },
//       error: (error: any) => {
//         console.log(error);
//       }
//     });
//     this.getHospitals();
//   }

}
