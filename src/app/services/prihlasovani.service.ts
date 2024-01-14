import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrihlasovaniService {
  private readonly URL:string = environment.apiUrl+'api/user/';

  constructor(private http:HttpClient) { }

  public registrovatUzivatele(start_value:any): any{
    return this.http.post(this.URL+"vytvorituzivatele",start_value);
  }
  public prihlasitUzivatele(start_value:any): any{
    console.log(start_value)
    return this.http.post(this.URL+"prihlasituzivatele",start_value);
  }
  public ziskatUzivatele(start_value:any):any{
    return this.http.post(this.URL+"ziskatUzivatele",start_value);
  }
}
