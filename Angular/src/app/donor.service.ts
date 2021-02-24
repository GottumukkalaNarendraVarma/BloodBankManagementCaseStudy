import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DonorService {
 
  private baseUrl='http://localhost:8080/bloodbank/donors';
  constructor(private http:HttpClient) { }
  adddonor(donor:any):Observable<any>{
    return this.http.post(this.baseUrl,donor);
  }
  getDonorByBlood(bloodgroup:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/blood/${bloodgroup}`);
  }
  requestingblood(id: number):Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
}
}
