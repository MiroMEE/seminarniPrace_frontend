import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlovickaService {
  private URL:string = 'http://localhost:3000/api/slovicka/';
  constructor(private http:HttpClient) { }

  public vytvoritSlovicka(start_value:any): any{
    try {
      return this.http.post(this.URL+"vytvoritSlovicka",start_value);
    } catch (error:any) {
      return error.message;
    }
  }
  public vsechnaSlovicka(): any{
    try {
      return this.http.get(this.URL);
    } catch (error:any) {
      return error.message;
    }
  }
  public vypsatSlovicko(start_value:string): any{
    try {
      return this.http.get(this.URL+"slovicko/"+start_value);
    } catch (error:any) {
      return error.message;
    }
  }
  public aktualizovatSlovicka(start_value:object): any{
    try {
      return this.http.put(this.URL+"update",start_value);
    } catch (error:any) {
      return error.message;
    }
  }
  public smazatSlovicka(start_value:object):any{
    try {
      return this.http.post(this.URL+"smazat",start_value);
    } catch (error:any) {
      return error.message;
    }
  }
}
