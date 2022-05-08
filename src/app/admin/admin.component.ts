import { Component, OnInit, ViewChild } from '@angular/core';
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
import { RoleFormComponent } from './forms/role-form/role-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { LevelFormComponent } from './forms/level-form/level-form.component';
import { DeleteWarningComponent } from './forms/delete-warning/delete-warning.component';
import { DoctorService } from '../_services/doctor.service';
import { DoctorAuthService } from '../_services/doctor-auth.service';
import swal from 'sweetalert2'; 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  tableName: string;
  loading:boolean = false;

  refresh(){ 
    // setTimeout(() => {
      this.getTableData(this.tableName);
    //   console.log("CALlED");
    // }, 1000)
  }

  onTableChange(event: any) {
    this.tableName = event.target.value;
    this.getTableData(this.tableName);
  }

  public levelColumns = ['levelName', 'levelDescription', 'update'];
  public roleColumns = ['roleName', 'roleDescription', 'update'];
  public doctorColumns = ['doctorName', 'hospitalName', 'details', 'update', 'delete'];
  public hospitalColumns = ['hospitalName', 'city', 'details', 'update', 'delete'];
  public adminColumns = ['adminName', 'role', 'details', 'update', 'delete'];

  public dataSourceLevel = new MatTableDataSource<Level>();
  public dataSourceRole = new MatTableDataSource<Role>();
  public dataSourceDoctor = new MatTableDataSource<Doctor>();
  public dataSourceHospital = new MatTableDataSource<Hospital>();
  public dataSourceAdmin = new MatTableDataSource<Admin>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('levelPaginator') levelPaginator: MatPaginator;
  @ViewChild('rolePaginator') rolePaginator: MatPaginator;
  @ViewChild('doctorPaginator') doctorPaginator: MatPaginator;
  @ViewChild('hospitalPaginator') hospitalPaginator: MatPaginator;
  @ViewChild('adminPaginator') adminPaginator: MatPaginator;

  sortedRoleData: Role[];
  sortedLevelData: Level[];
  sortedDoctorData: Doctor[];
  sortedHospitalData: Hospital[];
  sortedAdminData: Admin[];

  currentAdmin: any;

  constructor(private adminService: AdminService, public dialog: MatDialog, public doctorAuthService: DoctorAuthService) { 
    this.currentAdmin = this.doctorAuthService.getId();
  }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  notifyDelete(){
    swal.fire({
      title: 'You cannot delete yourself',
      icon: 'info', 
    })
  }

  
  notifyUpdate(){
    swal.fire({
      title: 'You cannot update yourself',
      icon: 'info',
    })
  }

  public getTableData = (tableName: string) => {
    this.loading = true;
    this.tableName = tableName;
    switch (tableName) {
      case 'LEVEL': {
        this.adminService.getLevels()
          .subscribe(res => {
            this.dataSourceLevel.data = res as Level[];
            this.dataSourceLevel.paginator = this.levelPaginator;
          })
        break;
      }
      case 'ROLE': {
        this.adminService.getRoles()
          .subscribe(res => {
            this.dataSourceRole.data = res as Role[];
            this.dataSourceRole.paginator = this.rolePaginator;
          })
        break;
      }
      case 'DOCTOR': {
        this.adminService.getDoctors()
          .subscribe(res => {
            this.dataSourceDoctor.data = res as Doctor[];
            for(var ele of this.dataSourceDoctor.data){
              ele.name = ele.firstName+" "+ele.lastName;
            }
            this.dataSourceDoctor.paginator = this.doctorPaginator;
          })
        break;
      }
      case 'HOSPITAL': {
        this.adminService.getHospitals()
          .subscribe(res => {
            this.dataSourceHospital.data = res as Hospital[];
            this.dataSourceHospital.paginator = this.hospitalPaginator;
          })
        break;
      }
      case 'ADMIN': {
        this.adminService.getAdmins()
          .subscribe(res => {
            // console.log("res: ", res);
            this.dataSourceAdmin.data = res as Admin[];
            for(var ele of this.dataSourceAdmin.data){
              ele.name = ele.firstName+" "+ele.lastName;
              // console.log("-->",ele.admin.userId);

            }
            this.dataSourceAdmin.paginator = this.adminPaginator;
          })
        break;
      }
    }
    this.loading = false;
  }

  openAddDialog(tableName: string) {
    switch (tableName) {
      // case 'LEVEL': {
      //   const dialogRef = this.dialog.open(LevelFormComponent, { data: { element: {}, operation: 'add' } });
      //   dialogRef.afterClosed().subscribe(result => {
      //     this.getTableData(tableName);
      //     // console.log(`Dialog result: ${result}`);
      //   });
      //   break;
      // }
      // case 'ROLE': {
      //   const dialogRef = this.dialog.open(RoleFormComponent, { data: { element: {}, operation: 'add' } });
      //   dialogRef.afterClosed().subscribe(result => {
      //     this.getTableData(tableName);
      //     // console.log(`Dialog result: ${result}`);
      //   });
      //   break;
      // }
      case 'DOCTOR': {
        const dialogRef = this.dialog.open(DoctorFormComponent, { data: { element: {}, operation: 'add' } });
        dialogRef.afterClosed().subscribe(result => {
          this.getTableData(tableName);
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'HOSPITAL': {
        const dialogRef = this.dialog.open(HospitalFormComponent, { data: { element: {}, operation: 'add' } });
        dialogRef.afterClosed().subscribe(result => {
          this.getTableData(tableName);
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'ADMIN': {
        const dialogRef = this.dialog.open(AdminFormComponent, { data: { element: {}, operation: 'add' } });
        dialogRef.afterClosed().subscribe(result => {
          this.getTableData(tableName);
        });
        break;
      }
    }
  }

  openDetailDialog(element: Element, tableName: string) {
    switch (tableName) {
      case 'DOCTOR': {
        const dialogRef = this.dialog.open(DoctorFormComponent, { data: { element: element, operation: '' } });
        dialogRef.afterClosed().subscribe((result: string) => {
          // this.getTableData(tableName);
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'HOSPITAL': {
        const dialogRef = this.dialog.open(HospitalFormComponent, { data: { element: element, operation: '' } });
        dialogRef.afterClosed().subscribe(result => {
          // this.getTableData(tableName);
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'ADMIN': {
        const dialogRef = this.dialog.open(AdminFormComponent, { data: { element: element, operation: '' } });
        dialogRef.afterClosed().subscribe(result => {
          // this.getTableData(tableName);
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
    }
  }

  public openUpdateDialog = (element: string, tableName: string) => {
    switch (tableName) {
      case 'LEVEL': {
        const dialogRef = this.dialog.open(LevelFormComponent, { data: { element: element, operation: 'update' } });
        dialogRef.afterClosed().subscribe(result => {
          this.getTableData(tableName);
          swal.fire({
            text:'Level is being Update!',
            icon:'success'
          })
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'ROLE': {
        const dialogRef = this.dialog.open(RoleFormComponent, { data: { element: element, operation: 'update' } });
        dialogRef.afterClosed().subscribe(result => {
          this.getTableData(tableName);
          // console.log(`Dialog result: ${result}`);
          swal.fire({
            text:'Role is being Update!',
            icon:'success'
          })
        });
        break;
      }
      case 'DOCTOR': {
        const dialogRef = this.dialog.open(DoctorFormComponent, { data: { element: element, operation: 'update' } });
        dialogRef.afterClosed().subscribe((result: string) => {
          this.getTableData(tableName);
          swal.fire({
            text:'Doctor is being Update!',
            icon:'success'
          })
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'HOSPITAL': {
        const dialogRef = this.dialog.open(HospitalFormComponent, { data: { element: element, operation: 'update' } });
        dialogRef.afterClosed().subscribe(result => {
          this.getTableData(tableName);
          swal.fire({
            text:'Hospital is being Update!',
            icon:'success'
          })
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
      case 'ADMIN': {
        const dialogRef = this.dialog.open(AdminFormComponent, { data: { element: element, operation: 'update' } });
        dialogRef.afterClosed().subscribe(result => {
          this.getTableData(tableName);
          swal.fire({
            text:'Admin is being Update!',
            icon:'success'
          })
          // console.log(`Dialog result: ${result}`);
        });
        break;
      }
    }
  }

  public openDeleteDialog = (element: any, tableName: string) => {
    switch (tableName) {
      // case 'LEVEL': {
      //   const dialogRef = this.dialog.open(DeleteWarningComponent, { data: element.levelName });
      //   dialogRef.afterClosed().subscribe((result) => {
      //     if (result === "true") {
      //       this.adminService.deleteLevel(element.levelId).subscribe(res => {
      //         this.getTableData(tableName);
      //       })
      //     }
      //   })
      //   break;
      // }
      // case 'ROLE': {
      //   const dialogRef = this.dialog.open(DeleteWarningComponent, { data: element.roleName });
      //   dialogRef.afterClosed().subscribe((result) => {
      //     if (result === "true") {
      //       this.adminService.deleteRole(element.roleId).subscribe(res => {
      //         this.getTableData(tableName);
      //       })
      //     }
      //   })
      //   break;
      // }
      case 'DOCTOR': {
        // swal.fire({
        //   title: 'Are you sure?',
        //   text: "You won't be able to revert this!",
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     Swal.fire(
        //       'Deleted!',
        //       'Your file has been deleted.',
        //       'success'
        //     )
        //   }
        // })
        const dialogRef = this.dialog.open(DeleteWarningComponent, { data: element.firstName+" "+element.lastName });
        dialogRef.afterClosed().subscribe((result) => {
          if (result === "true") {
            this.adminService.deleteDoctor(element.doctor.uuid).subscribe(res => {
              this.getTableData(tableName);
            })
          }
        })
        break;
      }
      case 'HOSPITAL': {
        const dialogRef = this.dialog.open(DeleteWarningComponent, { data: element.hospitalName });
        dialogRef.afterClosed().subscribe((result) => {
          if (result === "true") {
            this.adminService.deleteHospital(element.hospitalId).subscribe(res => {
              this.getTableData(tableName);
            })
          }
        })
        break;
      }
      case 'ADMIN': {
        const dialogRef = this.dialog.open(DeleteWarningComponent, { data: element.firstName+" "+element.lastName });
        dialogRef.afterClosed().subscribe((result) => {
          if (result === "true") {
            this.adminService.deleteAdmin(element.uuid).subscribe(res => {
              this.getTableData(tableName);
            })
          }
        })
        break;
      }
    }
  }

  sortData(sort: Sort, tableName: string) {
    switch (tableName) {
      case 'ROLE': {
        const roleData: Role[] = this.dataSourceRole.filteredData;
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
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}