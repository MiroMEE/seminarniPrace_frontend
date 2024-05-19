import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL:string = environment.apiUrl+'auth/';

  constructor(private http:HttpClient) { }

  // pošle request na backend-express server
  public registrovatUzivatele(values:any): Observable<any>{
    return this.http.post(this.URL+"register",values);
  }
  public prihlasitUzivatele(values:any): Observable<any>{
    return this.http.post(this.URL+"login",values,httpOptions).pipe(tap(res => this.setSession(res)),shareReplay());
  }
  public ziskatUzivatele(start_value:any):any{
    // return this.http.post(this.URL+"ziskatUzivatele",start_value);
  }
  // odhlášení / odstraní token
  public logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  // vrátí, pokud je token ještě validní
  public isLoggedIn() {
    return this.getExpiration().isValid();
  }


  // po přihlášení, uloží na klienta token
  private setSession(authResult:any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    return authResult;
  }          
  // získá expiraci
  private getExpiration() {
    const expiration = localStorage.getItem("expires_at") || '58004584058045840580';
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }    
}
