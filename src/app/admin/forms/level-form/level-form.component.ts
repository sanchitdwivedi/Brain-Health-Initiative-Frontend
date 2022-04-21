import { Component, Inject, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Level } from 'src/app/interfaces/Level';
import { AdminService } from 'src/app/_services/admin.service';
@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.css']
})
export class LevelFormComponent implements OnInit {
  update: boolean = false;
  add: boolean = false;
  @Input() tableName: string;
  levelForm: FormGroup;
  levelDetail: any;
  level: Level = ({} as any) as Level;

  constructor(
    @Inject(MAT_DIALOG_DATA) public operationAndDate: any,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    if (operationAndDate.operation === 'add') {
      this.add = true;
    } else if (operationAndDate.operation === 'update') {
      this.update = true;
    }
    this.levelDetail = operationAndDate.element;
    if(this.levelDetail!=={}){
      this.levelForm = this.fb.group({
        levelName: this.levelDetail.levelName,
        levelDescription: this.levelDetail.levelDescription
      });
    }else{
      this.levelForm = this.fb.group({
        levelName: [''],
        levelDescription: ['']
      });
      console.log(this.levelDetail);
    }
  }

  ngOnInit(): void {
  }

  // addLevel(levelDetails: any) {
  //   this.adminService.addLevel(levelDetails).subscribe({
  //     next: (response: any) => {
  //       console.log(response);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  updateLevel(levelDetails: any) {
    this.level.levelDescription = levelDetails.value.levelDescription;
    this.level.levelName = this.levelDetail.levelName;
    this.adminService.updateLevel(this.levelDetail.levelId, this.level).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  
}
