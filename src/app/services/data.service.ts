import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoices } from '../invoicedata';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fireBaseUrl = "https://invoice-app-d67cd-default-rtdb.firebaseio.com/";
  deleteUrl = "https://invoice-app-d67cd-default-rtdb.firebaseio.com/";
  editfireBaseUrl = "https://invoice-app-d67cd-default-rtdb.firebaseio.com/"
  jsonExt = ".json";
  Url = `${this.fireBaseUrl}${this.jsonExt}`
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    this.Url = `${this.fireBaseUrl}${this.jsonExt}`
    console.log("action test")
    return this.http.get(this.Url);
    
  }

  deleteInvoice(id: any) {
    const url = `${this.deleteUrl}${id}${this.jsonExt}`
    return this.http.delete(url)
  }

  editInvoice(id: any) {
    const editUrl = `${this.editfireBaseUrl}${id}${this.jsonExt}`
    return this.http.patch(editUrl,id)
  }

  newInvoice(payload: Invoices) {
    return this.http.post<Invoices>(this.Url, payload);
  }
}
