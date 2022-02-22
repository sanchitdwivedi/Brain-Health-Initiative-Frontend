import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './doctor/create/create.component';
import { QuestionnaireComponent } from './doctor/questionnaire/questionnaire.component';
import { SearchComponent } from './doctor/search/search.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'doctor/search-patient', component: SearchComponent, canActivate: [AuthGuard], data: {role: ['specialist', 'medical officer']} },
  { path: 'doctor/create-patient', component: CreateComponent, canActivate: [AuthGuard], data: {role: ['specialist', 'medical officer']} },
  { path: 'doctor/questionnaire', component: QuestionnaireComponent, canActivate: [AuthGuard], data: {role: ['specialist', 'medical officer']} },
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
