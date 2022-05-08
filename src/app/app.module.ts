import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { DoctorService } from './_services/doctor.service';
import { SearchComponent } from './doctor/search/search.component';
import { CreateComponent } from './doctor/create/create.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { CommonModule } from '@angular/common';
import { ConsultationTableComponent } from './doctor/search/consultation-table/consultation-table.component';
import { ConsultationTableRowComponent } from './doctor/search/consultation-table/consultation-table-row/consultation-table-row.component';
import { ConsultationFormComponent } from './doctor/consultation-form/consultation-form.component';
import { ReferralsComponent } from './doctor/referrals/referrals.component';
import { PatientsComponent } from './doctor/patients/patients.component';
import { QuestionnaireComponent } from './doctor/questionnaire/questionnaire.component';
import { AdminComponent } from './admin/admin.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorFormComponent } from './admin/forms/doctor-form/doctor-form.component';
import { HospitalFormComponent } from './admin/forms/hospital-form/hospital-form.component';
import { AdminFormComponent } from './admin/forms/admin-form/admin-form.component';
import { LevelFormComponent } from './admin/forms/level-form/level-form.component';
import { RoleFormComponent } from './admin/forms/role-form/role-form.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteWarningComponent } from './admin/forms/delete-warning/delete-warning.component';
import { MatListModule } from '@angular/material/list';
import { ProgramManagerComponent } from './program-manager/program-manager.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './program-manager/card/card.component';
import { AnnualPatientsVisitsComponent } from './program-manager/charts/annual-patients-visits/annual-patients-visits.component';
import { ChartsModule } from 'ng2-charts';
import { PatientsTableComponent } from './program-manager/patients-table/patients-table.component';
import { MiniCardComponent } from './program-manager/mini-card/mini-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { StatsDistrictComponent } from './program-manager/charts/stats-district/stats-district.component';
import { MatSelectModule } from '@angular/material/select';
import { StatsCityComponent } from './program-manager/charts/stats-city/stats-city.component';
import { QuestionnaireSymptomComponent } from './program-manager/charts/questionnaire-symptom/questionnaire-symptom.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForbiddenComponent,
    HeaderComponent,
    SearchComponent,
    CreateComponent,
    UpdatePasswordComponent,
    ConsultationTableComponent,
    ConsultationTableRowComponent,
    ConsultationFormComponent,
    ReferralsComponent,
    PatientsComponent,
    QuestionnaireComponent,
    AdminComponent,
    DoctorFormComponent,
    HospitalFormComponent,
    AdminFormComponent,
    LevelFormComponent,
    RoleFormComponent,
    DeleteWarningComponent,
    ProgramManagerComponent,
    CardComponent,
    AnnualPatientsVisitsComponent,
    PatientsTableComponent,
    MiniCardComponent,
    StatsDistrictComponent,
    StatsCityComponent,
    QuestionnaireSymptomComponent
  ],
  entryComponents: [
    DoctorFormComponent,
    HospitalFormComponent,
    RoleFormComponent,
    LevelFormComponent,
    AdminFormComponent,
    DeleteWarningComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule,
    MatChipsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DoctorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
