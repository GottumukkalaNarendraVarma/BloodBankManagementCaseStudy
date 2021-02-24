import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DonatebloodService {
  private baseUrl='http://localhost:8080/bloodbank';
 
  constructor(private http: HttpClient) { }
 
  donateBlood(donateblood: any): Observable<any>{
    return this.http.post(`${this.baseUrl}` + `/donate`,donateblood);
  }

  getDonations():Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/donors`);
  }

  updateDonation(donorId:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/accept/${donorId}`)
  }

  modifyDonation(donorId:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/reject/${donorId}`)
  }

  getDonorById(donorId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/donatestatus/${donorId}`)
  }


}