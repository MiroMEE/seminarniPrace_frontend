import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenicService {
  private URL:string = 'http://localhost:3000/api/datas/';

  constructor(private http:HttpClient) { }

  public vytvoritHru(data:any):any{
    try {
      return this.http.post(this.URL+"vytvoritHru",data);
    } catch (error:any) {
      return error.message;
    }
  }

  public ziskatHru(id:string):any{
    try {
      return this.http.get(this.URL+"ziskatHru/" + id);
    } catch (error:any) {
      return error.message;
    }
  }
}
