import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConsultationFormComponent } from './doctor/consultation-form/consultation-form.component';
import { CreateComponent } from './doctor/create/create.component';
import { PatientsComponent } from './doctor/patients/patients.component';
import { QuestionnaireComponent } from './doctor/questionnaire/questionnaire.component';
import { ReferralsComponent } from './doctor/referrals/referrals.component';
import { SearchComponent } from './doctor/search/search.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { ProgramManagerComponent } from './program-manager/program-manager.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'program-manager', component: ProgramManagerComponent, canActivate: [AuthGuard], data: {role: ['program manager']} },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {role: ['admin']}},
  { path: 'doctor/search-patient', component: SearchComponent, canActivate: [AuthGuard], data: {role: ['secondary specialist', 'medical officer']} },
  { path: 'doctor/create-patient', component: CreateComponent, canActivate: [AuthGuard], data: {role: ['secondary specialist', 'medical officer']} },
  { path: 'doctor/questionnaire', component: QuestionnaireComponent, canActivate: [AuthGuard], data: {role: ['secondary specialist', 'medical officer']} },
  { path: 'doctor/consultation-form', component: ConsultationFormComponent, canActivate: [AuthGuard], data: {role: ['secondary specialist', 'medical officer']} },
  { path: 'doctor/referrals', component: ReferralsComponent, canActivate: [AuthGuard], data: {role: ['tertiary specialist', 'secondary specialist', 'medical officer']} },
  { path: 'doctor/patients', component: PatientsComponent, canActivate: [AuthGuard], data: {role: ['tertiary specialist', 'secondary specialist', 'medical officer']} },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'update-password/:id', component: UpdatePasswordComponent },
  { path: '**', component: LoginComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
