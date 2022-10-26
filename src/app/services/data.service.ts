import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
fireBaseUrl = "https://invoice-app-d67cd-default-rtdb.firebaseio.com/";
  jsonExt = ".json";
  Url = `${this.fireBaseUrl}${this.jsonExt}`
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    this.Url = `${this.fireBaseUrl}${this.jsonExt}`
   return this.http.get(this.Url);
  }
}
