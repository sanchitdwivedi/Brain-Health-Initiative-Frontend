import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './doctor/create/create.component';
import { SearchComponent } from './doctor/search/search.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'doctor/search-patient', component: SearchComponent, canActivate: [AuthGuard], data: {role: ['specialist', 'medical officer']} },
  { path: 'doctor/create-patient', component: CreateComponent, canActivate: [AuthGuard], data: {role: ['specialist', 'medical officer']} },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
