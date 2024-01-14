import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slovicka } from '../interface/slovicka';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SlovickaService {
  private URL:string = environment.apiUrl+'api/slovicka/';
  constructor(private http:HttpClient) { }

  public vytvoritSlovicka(start_value:any): any{
    return this.http.post(this.URL+"vytvoritSlovicka",start_value);
  }
  public vsechnaSlovicka():any{
    return this.http.get(this.URL);
  }
  public vypsatSlovicko(start_value:string): any{
    return this.http.get(this.URL+"slovicko/"+start_value);
  }
  public aktualizovatSlovicka(start_value:object): any{
    return this.http.put(this.URL+"update",start_value);
  }
  public smazatSlovicka(start_value:object):any{
    return this.http.post(this.URL+"smazat",start_value);
  }
  public ziskatViceSlovicek(slovicka:any):any{
    return this.http.post(this.URL+"getSlovicek",slovicka);
  }
}
