import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestBloodService {

  private baseUrl='http://localhost:8080/bloodbank'

  constructor(private http:HttpClient) { }

  createRequest(requestBlood:any):Observable<any>{
    return this.http.post(`${this.baseUrl}` + `/request`,requestBlood)
  }
  
  getRequests():Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/approve`);
  }

  updateRequest(requesterId:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/update/${requesterId}`)
  }

  modifyRequest(requesterId:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/modify/${requesterId}`)
  }

  getRequesterById(requesterId:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/requeststatus/${requesterId}`)
  }

}
