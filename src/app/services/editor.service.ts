import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private dataSubject: ReplaySubject<string> = new ReplaySubject<string>(1);
  constructor() { }

  setData(data: string):void{
    this.dataSubject.next(data);
  }
  getData$() :Observable<string>{
    return this.dataSubject.asObservable();
  }
}
