import { Component, Inject, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/interfaces/Role';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  update: boolean;
  add: boolean;
  roleDetail: any;
  role: Role = ({} as any) as Role;

  constructor(
    @Inject(MAT_DIALOG_DATA) private operationAndDate: any,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    if (operationAndDate.operation === 'add') {
      this.add = true;
    } else if (operationAndDate.operation === 'update') {
      this.update = true;
    }
    this.roleDetail = operationAndDate.element;
    
  }

  ngOnInit(): void {
  }

  // addRole(roleDetails: any) {
  //   this.adminService.addRole(roleDetails).subscribe({
  //     next: (response: any) => {
  //       console.log(response);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  updateRole(roleDetails: any) {
    this.role.roleDescription = roleDetails.value.roleDescription;
    this.role.roleName = this.roleDetail.roleName;
    console.log("this.role: ",this.role, roleDetails);
    this.adminService.updateRole(this.roleDetail.roleId, this.role).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
