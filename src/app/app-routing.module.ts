import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { MedicalOfficerComponent } from './medical-officer/medical-officer.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'specialist', component: SpecialistComponent, canActivate: [AuthGuard], data: {role: 'specialist'} },
  { path: 'medical-officer', component: MedicalOfficerComponent, canActivate: [AuthGuard], data: {role: 'medical officer'}},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
