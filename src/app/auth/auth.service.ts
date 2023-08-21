import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {catchError, tap} from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs'
import { User } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered? ; boolean; 
  }

  @Injectable({ providedIn: 'root' })
    export class AuthService {

    user = new BehaviorSubject<User>(null);  
    private TokenExpirationTimer : any;

    constructor(private http: HttpClient, private router : Router) {}
    signup(email: string, password: string) {
        return this.http
          .post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseAPIKey,
            {
              email: email,
              password: password,
              returnSecureToken: true
            }
          ).pipe(catchError(this.handleError), tap(resData => {
              this.handleAuthentication(
                resData.email, 
                resData.localId, 
                resData.idToken,
                +resData.expiresIn
                );
          }));
        }

        login(email : string, password:string){
          return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseAPIKey,
            {
              email: email,
              password: password,
              returnSecureToken: true
            }
            ).pipe(catchError(this.handleError), tap(resData => {
              this.handleAuthentication(
                resData.email, 
                resData.localId, 
                resData.idToken,
                +resData.expiresIn
                );
            }));
        }
        autoLogin(){
          
          const userData : {
            email : string;
            id : string;
            _token : string;
            _tokenExpirationDate : string
          } = JSON.parse(localStorage.getItem('userData'));
          if(!userData){
            return;
          }

          const loadeduser =new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
            );

          if(loadeduser.token){
            this.user.next(loadeduser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
          }
        }

        autoLogout(expirationDuration : number){
            this.TokenExpirationTimer = setTimeout(()=> {
              this.logout();
            },expirationDuration);
        }
        logout(){
          this.user.next(null);
          this.router.navigate(['/auth']);
          //localStorage.clear();
          localStorage.removeItem('userData');
          if(this.TokenExpirationTimer){
            clearTimeout(this.TokenExpirationTimer);
          }
          this.TokenExpirationTimer = null;
        }
        private handleAuthentication(email : string, userId : string, token : string, expiresIn : number){
          const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
            const user = new User(
              email,
              userId, 
              token, 
              expirationDate
              );
              this.user.next(user);
              this.autoLogout(expiresIn * 1000);
              //console.log(JSON.stringify(user));
              localStorage.setItem('userData', JSON.stringify(user));
        }
        private handleError(errorRes : HttpErrorResponse){
          let errorMessage='An Unknown error occured....';
            if(!errorRes.error || !errorRes.error.error){
              return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
              case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists...';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exists...';
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'The password is not correct...';
                break;
            }
              return throwError(errorMessage);
        }
    
    }