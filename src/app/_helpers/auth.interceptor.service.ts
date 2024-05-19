import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // zjistí, pokud token existuje
    const idtoken = localStorage.getItem("id_token");
    if(idtoken){
      const cloned = request.clone({
        headers:request.headers.set("token",idtoken)
      })
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
]