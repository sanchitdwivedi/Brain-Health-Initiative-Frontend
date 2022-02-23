import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../_services/doctor.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  id: any;
  msg: string = '';


  constructor(private _ActivatedRoute: ActivatedRoute,
              private doctorService: DoctorService,
              private router: Router) { }

  ngOnInit(): void {
    this.msg = '';
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
  }

  updatePassword(passwordForm: NgForm){
    if(passwordForm.value.newPassword!==passwordForm.value.confirmPassword){
      this.msg = 'Passwords do not match!';
      return;
    }
    const resp = this.doctorService.updatePassword(this.id, passwordForm.value)
    if(resp===null) this.router.navigate(['/login']);
    else resp.subscribe({
          next: (response: any) => {
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.log(error);
          }
        });
  }

}
