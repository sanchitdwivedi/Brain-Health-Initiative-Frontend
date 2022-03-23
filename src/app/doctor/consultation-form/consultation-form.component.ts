import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/_services/doctor.service';
import { ConsultationCard } from 'src/app/interfaces/ConsultationCard';
import { DateShareService } from 'src/app/_services/date-share.service';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']
})
export class ConsultationFormComponent implements OnInit {
  optionValue: string = 'Follow-up';
  doctorRoles: any = [];
  doctors: any = [];
  consultationForm: FormGroup;
  reports: ConsultationCard[] = [];
  name: string = '';
  consultation: ConsultationCard;

  constructor(private doctorService: DoctorService,
              private fb:FormBuilder,
              private dataShareService: DateShareService) { 

      this.consultationForm = this.fb.group({
        name: [''],
        date: [''],
        diagnosisType: [''],
        compliant: [''],
        examination: [''],
        icd10Code: [''],
        icdDescription: [''],
        instructions: [''],
        improvementType: [''],
        illnessSummary: [''],
        medicines: this.fb.array([]),
        remarks: [''],
        furtherInstructions: [''],
        followUp: [''],
        doctorRole: [''],
        doctorName: [''],
      });
  }

  ngOnInit(): void {
    this.reports = this.dataShareService.getReports();
    this.name = this.reports[0].patient.first_name +" "+ this.reports[0].patient.last_name;
    // console.log(this.reports[0].patient);

    this.doctorService.getDoctorRoles().subscribe({
      next: (response: any) => {
        this.doctorRoles = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    }) 
  }

  create(){
    console.log(this.consultationForm.value);
    this.consultation.patient.abhaId = this.consultationForm.value.abhaId;
    
  }

  onChange(event: any){
    this.optionValue = event.target.value;
  }

  onRoleChange(event: any){
    this.doctorService.getDoctorByRoleId(event.target.value).subscribe({
      next: (response: any) => {
        this.doctors = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  medicines(): FormArray{
    return this.consultationForm.get("medicines") as FormArray;
  }

  newMedicine(): FormGroup{
    return this.fb.group({
      medicineName: [''],
      dosage: [''],
      dosingTime: [''],
    });
  }

  addMedicine(){
    this.medicines().push(this.newMedicine());
  }

  removeMedicine(i: number){
    this.medicines().removeAt(i);
  }


}
