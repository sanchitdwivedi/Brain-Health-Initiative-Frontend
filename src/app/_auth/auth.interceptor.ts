import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { DoctorAuthService } from "../_services/doctor-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private doctorAuthService: DoctorAuthService,
                private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth')==='True'){
            return next.handle(req.clone());
        }

        const token = this.doctorAuthService.getToken();

        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    if(err.status===401){
                        this.doctorAuthService.clear();
                        this.router.navigate(['/login']);
                    }
                    else if(err.status===403){
                        this.router.navigate(['/forbidden']);
                    }
                    return throwError(() => new Error("Something is wrong"));
                }
            )
        );
    }

    private addToken(request: HttpRequest<any>, token: string){
        return request.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }

}
