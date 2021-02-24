import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestorauthenticationService {

  uname:string;

  private baseUrl = 'http://localhost:8080/bloodbank/checkloginRequestor';
  constructor(private http: HttpClient) { }
  authenticateRequestor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  isRequestorLoggedIn(){
    let user=sessionStorage.getItem('username')
    this.uname=user;
    return !(user === null)
  }
}
