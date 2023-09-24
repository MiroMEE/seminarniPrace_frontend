import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrihlasovaniService {
  private URL:string = 'http://localhost:3000/api/user/';

  constructor(private http:HttpClient) { }

  public registrovatUzivatele(start_value:any): any{
    try {
      return this.http.post(this.URL+"vytvorituzivatele",start_value);
    } catch (error:any) {
      return error.message;
    }
  }
  public prihlasitUzivatele(start_value:any): any{
    try {
      return this.http.post(this.URL+"prihlasituzivatele",start_value);
    } catch (error:any) {
      return error.message;
    }
  }
}
