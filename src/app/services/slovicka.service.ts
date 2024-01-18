import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slovicka } from '../interface/slovicka';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SlovickaService {
  private URL:string = environment.apiUrl+'/slovicka/';
  constructor(private http:HttpClient) { }

  // představa: message
  public vytvoritSlovicka(start_value:any): any{
    return this.http.post<Slovicka>(this.URL,start_value);
  }
  public vsechnaSlovicka():any{
    return this.http.get<Slovicka>(this.URL);
  }
  public vypsatSlovicko(start_value:string): any{
    return this.http.get<Slovicka>(this.URL+start_value);
  }
  public aktualizovatSlovicka(id:string,start_value:object): any{
    return this.http.patch<Slovicka>(this.URL+id,start_value);
  }
  public smazatSlovicka(id:string,):any{
    return this.http.delete<Slovicka>(this.URL+id);
  }
  public ziskatViceSlovicek(slovicka:any):any{
  //   return this.http.post<Slovicka>(this.URL+"getSlovicek",slovicka);
  }
}
