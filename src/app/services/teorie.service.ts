import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TeorieService {
  private URL:string = 'http://localhost:3000/api/teorie/';
  constructor(private http:HttpClient) { }

  public poslatJSON(start_value:any): any{
    try {
      return this.http.post(this.URL+"vytvoritTeorii",{name:start_value.name,teorie_json:JSON.stringify(start_value.teorie_json)});
    } catch (error:any) {
      return error.message;
    }
  }
  public vsechnaTeorie(): any{
    try {
      return this.http.get(this.URL+"vsechnyteorie");
    } catch (error:any) {
      return error.message;
    }
  }
  public vypsatTeorii(start_value:string): any{
    try {
      return this.http.get(this.URL+"teorie/"+start_value);
    } catch (error:any) {
      return error.message;
    }
  }
  public aktualizovatTeorii(start_value:object): any{
    try {
      return this.http.put(this.URL+"update",start_value);
    } catch (error:any) {
      return error.message;
    }
  }
  public smazatTeorii(start_value:object):any{
    try {
      return this.http.post(this.URL,start_value);
    } catch (error:any) {
      return error.message;
    }
  }
}
