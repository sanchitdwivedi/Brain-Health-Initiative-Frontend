import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import { Hospital } from "./Hospital";

export interface ConsultationCard {
  patient: Patient;
  doctor: {
      doctor: {
          userId : number
      }
  };
  hospital: {
      hospitalId: number
  };
  compliant:string;
  examination:string;
  illnessSummary:string;
  diagnosistype:string;
  icdDescription:string;
  idc10code:string;
  improvementtype: string;
  medicineInfo: [];
  duration: string;
  dateAndTime:Date;
  remarks: string;
  treatmentInstructions: string;
  followUp: string;
  refer: {
    doctor: {
      userId: string;
    };
  };
}
