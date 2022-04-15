import { Component, Inject, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/_services/admin.service';
@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.css']
})
export class LevelFormComponent implements OnInit {
  add: boolean = false;
  @Input() tableName: string;
  levelForm: FormGroup;
  readonly: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public levelDetail: any,
    private fb: FormBuilder,
    private adminService: AdminService
  ) {
    if (levelDetail === true) {
      this.add = true;
    } else {
      this.levelDetail = levelDetail;
    }

    this.levelForm = this.fb.group({
      levelName: [''],
      levelDescription: ['']
    });
  }

  ngOnInit(): void {
  }

  addLevel(levelDetails: any) {
    // this.dialogRef.close();
    this.adminService.addLevel(levelDetails).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
