import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Level } from '../interfaces/Level';
import { Role } from '../interfaces/Role';
import { Doctor } from '../interfaces/Doctor';
import { Hospital } from '../interfaces/Hospital';
import { Admin } from '../interfaces/Admin';
// import { PM } from '../interfaces/programManager';
import { AdminService } from '../_services/admin.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //   addEntry: boolean;
  //   updateEntry: boolean;
  //   deleteEntry: boolean;
    tableName: string;
  //   operationName: string;
  //   adminForm: FormGroup;

  //   constructor() { }

  //   ngOnInit(): void {
  //     this.addEntry = false;
  //     this.updateEntry = false;
  //     this.deleteEntry = false;
  //   }

  //   onOperationChange(event: any){
  //     this.operationName = event.target.value;
  //   }

    onTableChange(event: any){
      this.tableName = event.target.value;
      this.getAllOwners(this.tableName);
    }


  // }

  public levelColumns = ['levelName', 'levelDescription', 'update', 'delete'];
  public roleColumns = ['roleName', 'roleDescription','update', 'delete'];
  public doctorColumns = ['doctorName', 'hospitalName', 'details', 'update', 'delete'];
  public hospitalColumns = ['hospitalName', 'city', 'details', 'update', 'delete'];
  public adminColumns = ['adminName', 'role', 'details', 'update', 'delete'];
  // public pmColumns = ['Program Manager Name', 'details', 'update', 'delete'];
  

  public dataSourceLevel = new MatTableDataSource<Level>();
  public dataSourceRole = new MatTableDataSource<Role>();
  public dataSourceDoctor = new MatTableDataSource<Doctor>();
  public dataSourceHospital = new MatTableDataSource<Hospital>();
  public dataSourceAdmin = new MatTableDataSource<Admin>();
  // public dataSourcePM = new MatTableDataSource<PM>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    // this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSourceLevel.sort = this.sort;
  }

  public getAllOwners = (tableName: string) => {
    switch(tableName){
      case 'LEVEL': {
        this.adminService.getLevels()
        .subscribe(res => {
          this.dataSourceLevel.data = res as Level[];
          // console.log("res ", res);
        })
        break;
      }
      case 'ROLE': {
        this.adminService.getRoles()
        .subscribe(res => {
          this.dataSourceRole.data = res as Role[];
          // console.log("res ", res);
        })
        break;
      }
      case 'DOCTOR': {
        this.adminService.getDoctors()
        .subscribe(res => {
          this.dataSourceDoctor.data = res as Doctor[];
          // console.log("res ", res);
        })
        break;
      }
      case 'HOSPITAL': {
        this.adminService.getHospitals()
        .subscribe(res => {
          this.dataSourceHospital.data = res as Hospital[];
          // console.log("res ", res);
        })
        break;
      }
      case 'ADMIN': {
        this.adminService.getAdmins()
        .subscribe(res => {
          this.dataSourceAdmin.data = res as Admin[];
          console.log("res ", res);
        })
        break;
      }
    }

  }
  public redirectToDetails = (id: string) => {

  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }
}