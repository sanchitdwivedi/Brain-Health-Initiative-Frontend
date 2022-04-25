import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StatsService } from '../_services/stats.service';
import { DoctorService } from '../_services/doctor.service';
import { ConsultationCard } from '../interfaces/ConsultationCard';
import { Doctor } from '../interfaces/Doctor';
import { Hospital } from '../interfaces/Hospital';

@Component({
  selector: 'app-program-manager',
  templateUrl: './program-manager.component.html',
  styleUrls: ['./program-manager.component.css']
})
export class ProgramManagerComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver,
              private statsService: StatsService) {}

  consultationForms: ConsultationCard[];
  doctors: Doctor[];
  hospitals: Hospital[];

  async ngOnInit() {
    this.consultationForms = await this.statsService.getConsultationFormData();
    this.doctors = await this.statsService.getDoctorsData();
    this.hospitals = await this.statsService.getHospitalsData();
    this.fillMiniCardData();
    this.fillDistricts();
    this.fillCities();
  }

  selectedDistrict: string = "";
  selectedCity: string = "";

  districts: string[] = [];
  cities: string[] = [];

  miniCardData: any = [];

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return {
            columns: 1,
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 2 },
            table: { cols: 1, rows: 4 },
          };
        }

        return {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 2, rows: 2 },
          table: { cols: 4, rows: 4 },
        };
      })
    );

  fillMiniCardData(): void {
    // Patients visited card
    let currentYearData = this.statsService.patientsVisitedInAnYear(new Date());
    let previousYear = new Date();
    previousYear.setFullYear(previousYear.getFullYear()-1);
    let lastYearData = this.statsService.patientsVisitedInAnYear(previousYear);
    
    let change = 0;
    if(lastYearData.length===0) change = 1;
    else{
      change = (currentYearData.length - lastYearData.length)/lastYearData.length;
    }
    this.miniCardData.push(
      { title: "Patients visited", value: currentYearData.length.toString(), isIncrease: change>=0, color: "primary", percentValue: Math.abs(change), icon: "personal_injury", change: true }
    )

    // Questionnaires Used
    currentYearData = this.statsService.questionnairesUsedInAnYear(new Date());
    lastYearData = this.statsService.questionnairesUsedInAnYear(previousYear);
    if(lastYearData.length===0) change = 1;
    else{
      change = (currentYearData.length - lastYearData.length)/lastYearData.length;
    }
    this.miniCardData.push(
      { title: "Questionnaire used", value: currentYearData.length.toString(), isIncrease: change>=0, color: "accent", percentValue: Math.abs(change), icon: "medical_information", change: true }
    )

    // Total doctors
    let data = this.statsService.getAllDoctors();
    this.miniCardData.push(
      { title: "Total Doctors", value: DoctorService.length.toString(), isIncrease: false, color: "warn", percentValue: 0, icon: "people", change: false }
    )

    // Patients cured
    currentYearData = this.statsService.patientsCuredInAnYear(new Date());
    lastYearData = this.statsService.patientsCuredInAnYear(previousYear);
    if(lastYearData.length===0) change = 1;
    else{
      change = (currentYearData.length - lastYearData.length)/lastYearData.length;
    }
    this.miniCardData.push(
      { title: "Patients cured", value: currentYearData.length.toString(), isIncrease: change>=0, color: "primary", percentValue: Math.abs(change), icon: "healing", change: true }
    )
  } 

  fillDistricts(){
    let set = new Set<string>();
    this.hospitals.forEach(hospital => {
      set.add(hospital.district);
    });

    for(let districts of set){
      this.districts.push(districts);
    }
  }

  fillCities(){
    let set = new Set<string>();
    this.hospitals.forEach(hospital => {
      set.add(hospital.city);
    });

    for(let city of set){
      this.cities.push(city);
    }
  }
}

