import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() tableName: string;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  searchDoctor(doctorForm: NgForm){
    console.log("doctorForm.value: ", doctorForm.value);
    this.adminService.getDoctor(doctorForm.value.doctorId).subscribe({
      next: (response: any) => {
        console.log("response: ", response);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  searchRole(){}
  searchLevel(){}
  searchAdmin(){}
  searchPM(){}
  searchHospital(){}

}
