import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Admin } from 'src/app/interfaces/Admin';
import { Role } from 'src/app/interfaces/Role';
import { User } from 'src/app/interfaces/User';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  update: boolean = false;
  add: boolean = false;
  @Input() tableName: string;
  adminDetail: any;
  roles: any = [];
  role: Role = ({} as any) as Role;
  admin: Admin = ({} as any) as Admin;
  user: User = ({} as any) as User;


  constructor(
    @Inject(MAT_DIALOG_DATA) private operationAndDate: any,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    console.log("operationAndDate.element: ", operationAndDate.element);
    if (operationAndDate.operation === 'add') {
      this.add = true;
    } else if (operationAndDate.operation === 'update') {
      this.update = true;
    }
    this.adminDetail = operationAndDate.element;
  }

  ngOnInit(): void {
    this.getRoles();
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

  addAdmin(adminDetails:any) {
    this.adminService.addAdmin(adminDetails.value).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updateAdmin(adminDetails:any) {
    this.adminService.updateAdmin(this.adminDetail.userId, adminDetails.value).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
