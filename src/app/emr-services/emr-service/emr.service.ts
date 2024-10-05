import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmrService {
  constructor(private http: HttpClient){}
  
  post(payload: any, url: string) {
    return this.http.post(url,payload).pipe(
       tap((data)=>data),
    ) as Observable<any>;
  }
}