import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import { Hospital } from "./Hospital";

export interface ConsultationCard {
  compliant:string;
  dateAndTime:Date;
  diagnosistype:string;
  doctorId:Doctor;
  dosage:string;
  dosingtime:string;
  duration:string;
  examination:string;
  followUp:string;
  formId:string;
  hospitalId:Hospital;
  icdDescription:string;
  idc10code:string;
  illnessSummary:string;
  improvementtype:string;
  medicineName:string;
  patient:Patient;
  refer:string;
  remarks:string;
  treatmentInstructions:string;
}
