import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ConsultationCard } from 'src/app/interfaces/ConsultationCard';
import { StatsService } from 'src/app/_services/stats.service';

export interface PatientsTableItem {
  date: string;
  patient: string;
  hospital: string;
  doctor: string;
  condition: string;
}


@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'patient', 'condition', 'hospital', 'doctor'];
  dataSource: MatTableDataSource<PatientsTableItem>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private statsService: StatsService) {
    this.statsService.getConsultationFormData().then((consultationForms: ConsultationCard[]) => {
      let data: PatientsTableItem[] = [];
      consultationForms.forEach(form => {
        let curr: PatientsTableItem = {} as PatientsTableItem;
        curr.date = new Date(form.dateAndTime).toISOString().split('T')[0];
        curr.patient = form.patient.first_name + " " + form.patient.last_name;
        curr.hospital = form.hospital.hospitalName;
        curr.doctor = form.doctor.firstName + " " + form.doctor.lastName;
        curr.condition = form.improvementtype.slice(10);

        data.push(curr);
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
