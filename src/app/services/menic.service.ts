import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenicService {
  private URL:string = environment.apiUrl+'data/';

  constructor(private http:HttpClient) { }

  public vytvoritHru(data:any):any{
    try {
      return this.http.post(this.URL,data);
    } catch (error:any) {
      return error.message;
    }
  }

  public ziskatHru(id:string):any{
    try {
      return this.http.get(this.URL+id);
    } catch (error:any) {
      return error.message;
    }
  }
}
