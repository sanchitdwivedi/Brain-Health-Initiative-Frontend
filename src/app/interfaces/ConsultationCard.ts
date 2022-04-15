import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import { Hospital } from "./Hospital";

export interface ConsultationCard {
  formId: number;
  patient: Patient;
  doctor: Doctor;
  hospital: Hospital;
  compliant:string;
  examination:string;
  illnessSummary:string;
  diagnosistype:string;
  icdDescription:string;
  icd10Code:string;
  improvementtype: string;
  medicineInfo: [];
  dateAndTime:Date;
  remarks: string;
  treatmentInstructions: string;
  followUp: Date;
  refer: Doctor;
  questionnaireResponse: [];
}
