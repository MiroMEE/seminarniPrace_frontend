import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SlovickaJson, SlovickaReady } from '../interface/slovicka';
@Injectable({
  providedIn: 'root'
})
export class SlovickaService {
  private URL:string = environment.apiUrl+'slovicka/';
  constructor(private http:HttpClient) { }
  // CRUD + všechna a některá
  public vytvoritSlovicka(slovicko:object): Observable<SlovickaJson>{
    return this.http.post<SlovickaJson>(this.URL,slovicko);
  }
  public vsechnaSlovicka():Observable<Array<SlovickaReady>>{
    return this.http.get<Array<SlovickaReady>>(this.URL);
  }
  public svojeSlovicka():Observable<Array<SlovickaReady>>{
    return this.http.post<Array<SlovickaReady>>(this.URL+'own',{});
  }
  public vypsatSlovicko(id:string): Observable<SlovickaReady>{
    return this.http.get<SlovickaReady>(this.URL+id);
  }
  public aktualizovatSlovicka(id:string,slovicko_json:string): Observable<SlovickaReady>{
    return this.http.patch<SlovickaReady>(this.URL+id,{slovicka_json:slovicko_json});
  }
  public smazatSlovicka(id:string):Observable<SlovickaReady>{
    return this.http.delete<SlovickaReady>(this.URL+id);
  }
  public ziskatViceSlovicek(slovicka_ids:Array<string>):Observable<Array<SlovickaReady>>{
    return this.http.post<Array<SlovickaReady>>(this.URL+"a",{slovicka:slovicka_ids});
  }
}
