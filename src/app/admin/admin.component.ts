import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Level } from '../interfaces/Level';
import { Role } from '../interfaces/Role';
import { Doctor } from '../interfaces/Doctor';
import { Hospital } from '../interfaces/Hospital';
import { Admin } from '../interfaces/Admin';
import { AdminService } from '../_services/admin.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DoctorFormComponent } from './forms/doctor-form/doctor-form.component';
import { HospitalFormComponent } from './forms/hospital-form/hospital-form.component';
import { AdminFormComponent } from './forms/admin-form/admin-form.component';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  tableName: string;

  onTableChange(event: any) {
    this.tableName = event.target.value;
    this.getTableData(this.tableName);
  }

  public levelColumns = ['levelName', 'levelDescription', 'update', 'delete'];
  public roleColumns = ['roleName', 'roleDescription', 'update', 'delete'];
  public doctorColumns = ['doctorName', 'hospitalName', 'details', 'update', 'delete'];
  public hospitalColumns = ['hospitalName', 'city', 'details', 'update', 'delete'];
  public adminColumns = ['adminName', 'role', 'details', 'update', 'delete'];

  public dataSourceLevel = new MatTableDataSource<Level>();
  public dataSourceRole = new MatTableDataSource<Role>();
  public dataSourceDoctor = new MatTableDataSource<Doctor>();
  public dataSourceHospital = new MatTableDataSource<Hospital>();
  public dataSourceAdmin = new MatTableDataSource<Admin>();

  @ViewChild(MatSort) sort: MatSort;

  sortedRoleData: Role[];
  sortedLevelData: Level[];
  sortedDoctorData: Doctor[];
  sortedHospitalData: Hospital[];
  sortedAdminData: Admin[];


  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }


  public getTableData = (tableName: string) => {
    switch (tableName) {
      case 'LEVEL': {
        this.adminService.getLevels()
          .subscribe(res => {
            this.dataSourceLevel.data = res as Level[];
            console.log("res ", this.dataSourceLevel);

          })
        break;
      }
      case 'ROLE': {
        this.adminService.getRoles()
          .subscribe(res => {
            this.dataSourceRole.data = res as Role[];
            console.log("res ", res);
            // this.sortedRoleData = res as Role[];
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

  openDialog(form: string) {
    switch (form) {
      case 'DOCTOR': {
        const dialogRef = this.dialog.open(DoctorFormComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'HOSPITAL': {
        const dialogRef = this.dialog.open(HospitalFormComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'ADMIN': {
        const dialogRef = this.dialog.open(AdminFormComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
        break;
      }
    }
  }

  sortData(sort: Sort, tableName: string) {
    switch (tableName) {
      case 'ROLE': {
        const roleData: Role[] = this.dataSourceRole.filteredData;;
        if (!sort.active || sort.direction === '') {
          this.sortedRoleData = roleData;
          return;
        }
        this.sortedRoleData = roleData.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'roleName':
              return compare(a.roleName, b.roleName, isAsc);
            case 'roleDescription':
              return compare(a.roleDescription, b.roleDescription, isAsc);
            default:
              return 0;
          }
        });
        this.dataSourceRole.sort = this.sort;
        break;
      }
      case 'LEVEL': {
        const levelData: Level[] = this.dataSourceLevel.filteredData;;
        if (!sort.active || sort.direction === '') {
          this.sortedLevelData = levelData;
          return;
        }
        this.sortedLevelData = levelData.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'levelName':
              return compare(a.levelName, b.levelName, isAsc);
            case 'levelDescription':
              return compare(a.levelDescription, b.levelDescription, isAsc);
            default:
              return 0;
          }
        });
        this.dataSourceLevel.sort = this.sort;
        break;
      }
      case 'DOCTOR': {
        const doctorData: Doctor[] = this.dataSourceDoctor.filteredData;;
        if (!sort.active || sort.direction === '') {
          this.sortedDoctorData = doctorData;
          return;
        }
        this.sortedDoctorData = doctorData.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'doctorName':
              return compare(a.firstName + " " + a.lastName, b.firstName + " " + b.lastName, isAsc);
            case 'hospitalName':
              return compare(a.hospital.hospitalName, b.hospital.hospitalName, isAsc);
            default:
              return 0;
          }
        });
        this.dataSourceDoctor.sort = this.sort;
        break;
      }
      case 'HOSPITAL': {
        const hospitalData: Hospital[] = this.dataSourceHospital.filteredData;;
        if (!sort.active || sort.direction === '') {
          this.sortedHospitalData = hospitalData;
          return;
        }
        this.sortedHospitalData = hospitalData.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'hospitalName':
              return compare(a.hospitalName, b.hospitalName, isAsc);
            case 'city':
              return compare(a.city, b.city, isAsc);
            default:
              return 0;
          }
        });
        this.dataSourceHospital.sort = this.sort;
        break;
      }
      case 'ADMIN': {
        const adminData: Admin[] = this.dataSourceAdmin.filteredData;;
        if (!sort.active || sort.direction === '') {
          this.sortedAdminData = adminData;
          return;
        }
        this.sortedAdminData = adminData.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'adminName':
              return compare(a.firstName + " " + a.lastName, b.firstName + " " + b.lastName, isAsc);
            case 'role':
              return compare(a.admin.role.roleName, b.admin.role.roleName, isAsc);
            default:
              return 0;
          }
        });
        this.dataSourceAdmin.sort = this.sort;
        break;
      }
    }
  }

  applyFilter(event: Event, tableName: string) {
    switch (tableName) {
      case 'ROLE': {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSourceRole.filter = filterValue.trim().toLowerCase();
        break;
      }
      case 'LEVEL': {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSourceLevel.filter = filterValue.trim().toLowerCase();
        break;
      }
      case 'DOCTOR': {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSourceDoctor.filter = filterValue.trim().toLowerCase();
        break;
      }
      case 'HOSPITAL': {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSourceHospital.filter = filterValue.trim().toLowerCase();
        break;
      }
      case 'ADMIN': {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSourceAdmin.filter = filterValue.trim().toLowerCase();
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

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}