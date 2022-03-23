import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  addEntry: boolean;
  updateEntry: boolean;
  deleteEntry: boolean;
  tableName: string;
  operationName: string;
  adminForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addEntry = false;
    this.updateEntry = false;
    this.deleteEntry = false;
  }

  onOperationChange(event: any){
    this.operationName = event.target.value;
  }

  onTableChange(event: any){
    this.tableName = event.target.value;
    console.log(this.tableName,"||");
  }

  Add(){
    
  }

}
