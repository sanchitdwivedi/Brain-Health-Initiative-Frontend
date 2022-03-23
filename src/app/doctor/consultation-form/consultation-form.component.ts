import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/_services/doctor.service';

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

  constructor(private doctorService: DoctorService,
              private fb:FormBuilder) { 

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
