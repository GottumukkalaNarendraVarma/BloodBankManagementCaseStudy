import { Injectable } from '@angular/core';
import { Requestor } from './requestor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class RequestorService {
  private baseUrl='http://localhost:8080/bloodbank/requestors';
  constructor(private http:HttpClient) { }
  addrequestor(requestor:any):Observable<any>{
    return this.http.post(this.baseUrl,requestor);
  }
}