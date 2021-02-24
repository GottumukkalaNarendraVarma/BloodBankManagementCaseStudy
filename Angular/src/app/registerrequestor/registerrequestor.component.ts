import { Component, OnInit, Input, Output } from '@angular/core';
import { Requestor } from '../requestor';
import { RequestorService } from '../requestor.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-registerrequestor',
  templateUrl: './registerrequestor.component.html',
  styleUrls: ['./registerrequestor.component.css']
})
export class RegisterrequestorComponent implements OnInit {
  submitted=false;
  id:number;
  requestor:Requestor=new Requestor();
   requestors:Requestor;
   //data:Requestor[];
  constructor(private requestorservice:RequestorService,private route:Router) { }
 
  ngOnInit(): void {
  }
onSubmit(){
  this.save();
}
save(){
  this.requestorservice.addrequestor(this.requestor)
    .subscribe(
          data =>{
        console.log(data);
        this.submitted=true;
        this.requestors=data;
        localStorage.setItem("requesterId",this.requestors.requesterId.toString());
        localStorage.setItem("username",this.requestor.username);
        console.log(this.requestors.requesterId);
        console.log(this.requestors.username);
        this.route.navigate(["requestersuccess"]);
      },
      error =>console.log(error));
    }
    /*goToRequestorsuccess():void{
      this.requestorservice.
    }*/
  }