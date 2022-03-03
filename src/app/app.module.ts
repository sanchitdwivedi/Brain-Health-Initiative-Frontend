import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
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
    ConsultationFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
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
