import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-program-manager',
  templateUrl: './program-manager.component.html',
  styleUrls: ['./program-manager.component.css']
})
export class ProgramManagerComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver) {}

  selectedDistrict: string = "";
  selectedCity: string = "";

  districts = ['Ropar', 'Bangalore'];
  cities = ['Nangal', 'Chandigarh'];

  miniCardData = [
      { title: "Patients visited", value: "9465", isIncrease: true, color: "primary", percentValue: 0.5383, icon: "personal_injury", isCurrency: true },
      { title: "In-patients", value: "465", isIncrease: false, color: "accent", percentValue: 0.2544, icon: "local_hospital", isCurrency: true },
      { title: "Total Doctors", value: "243", isIncrease: true, color: "warn", percentValue: 0.4565, icon: "people", isCurrency: false },
      { title: "Patients cured", value: "35", isIncrease: false, color: "primary", percentValue: 0.8361, icon: "healing", isCurrency: false }
    ];

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return {
            columns: 1,
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 2 },
            table: { cols: 1, rows: 2 },
          };
        }

        return {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 2, rows: 2 },
          table: { cols: 4, rows: 2 },
        };
      })
    );
}


