import { Component, Inject, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) private operationAndDate: any,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    console.log("operationAndDate: ", operationAndDate);
    if (operationAndDate.operation === 'add') {
      this.add = true;
    } else if (operationAndDate.operation === 'update') {
      this.update = true;
    }
    this.roleDetail = operationAndDate.element;
    
  }

  ngOnInit(): void {
  }

  addRole(roleDetails: any) {
    this.adminService.addRole(roleDetails).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updateRole(roleDetails: any) {
    console.log("roleDetails: ", roleDetails.value);
    this.adminService.updateRole(roleDetails).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
