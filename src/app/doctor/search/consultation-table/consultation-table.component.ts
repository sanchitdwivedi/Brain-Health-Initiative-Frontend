import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrls: ['./consultation-table.component.css']
})
export class ConsultationTableComponent implements OnInit {

  reportDetails = [
    {
      formId:"123",
      name:"KhushalKhushalKhushal",
      mob:"98989",
      dateAndTime:"1990",
      compliant:"compliant",
      diagnosisType:"diagnosisType",
      duration:"duration",
      examination:"examination",
      followUps:"followUps",
      icdDescription:"icdDescription",
      icd10Code:"icd10Code",
      illnessSummary:"illnessSummaryillnessSummary",
      improvementType:"improvementType",
      refer:"refer",
      remarks:"remarks",
      treatmentInstructions:"treatmentInstructions",
      doctor_id:"doctor_id",
      patient_id:"patient_id",
      hospital_id:"hospital_id"
    }
  ]
  elements: any = [];
  ngOnInit() {
  }
}
