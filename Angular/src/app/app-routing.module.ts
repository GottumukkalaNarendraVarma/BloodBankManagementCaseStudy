import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestbloodComponent } from './requestblood/requestblood.component';
import { ApproverequestComponent } from './approverequest/approverequest.component';
import { DonatebloodComponent } from './donateblood/donateblood.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { RequestersListComponent } from './requesters-list/requesters-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BloodavalibiltyComponent } from './bloodavalibilty/bloodavalibilty.component';
import { RegisterComponent } from './register/register.component';
import { RegisterrequestorComponent } from './registerrequestor/registerrequestor.component';
import { RegisterdonorComponent } from './registerdonor/registerdonor.component';
import { HomeComponent } from './home/home.component';
import { RequestersuccessComponent } from './requestersuccess/requestersuccess.component';
import { LoginrequestorComponent } from './loginrequestor/loginrequestor.component';
import { RequestorauthguardService } from './requestorauthguard.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginDonorComponent } from './logindonor/logindonor.component';
import { DonorsuccessComponent } from './donorsuccess/donorsuccess.component';
import { RequestapprovedComponent } from './requestapproved/requestapproved.component';
import { RequestrejectedComponent } from './requestrejected/requestrejected.component';
import { RequestingbloodComponent } from './requestingblood/requestingblood.component';
import { CheckingstatusComponent } from './checkingstatus/checkingstatus.component';
import { DonatingbloodComponent } from './donatingblood/donatingblood.component';
import { CheckingdonationComponent } from './checkingdonation/checkingdonation.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LogoutdonorComponent } from './logoutdonor/logoutdonor.component';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { RequesterpagenotfoundComponent } from './requesterpagenotfound/requesterpagenotfound.component';
import { DonorpagenotfoundComponent } from './donorpagenotfound/donorpagenotfound.component';
import { DonationapprovedComponent } from './donationapproved/donationapproved.component';
import { DonationrejectedComponent } from './donationrejected/donationrejected.component';

const routes: Routes = [
  { path:'register', component:RegisterComponent},
  { path:'registerrequesters', component:RegisterrequestorComponent},
  { path:'registerdonors',component:RegisterdonorComponent},
  { path:'request', component:RequestbloodComponent},
  { path:'requesting',component:RequestingbloodComponent},
  { path:'checking',component:CheckingstatusComponent},
  { path:'approve', component:ApproverequestComponent},
  { path:'donate', component:DonatebloodComponent},
  { path:'donors', component:DonorsListComponent},
  { path:'requesters',component:RequestersListComponent},
  { path:'about', component:AboutusComponent},
  { path:'bloodavalibilty', component:BloodavalibiltyComponent},
  { path:'requestersuccess',component:RequestersuccessComponent},
  { path:'loginrequestor',component:LoginrequestorComponent},
  { path:'logindonor',component:LoginDonorComponent},
  { path:'logout',component:LogoutComponent},
  { path:'donorsuccess',component:DonorsuccessComponent},
  { path:'right',component:RequestapprovedComponent},
  { path:'wrong',component:RequestrejectedComponent},
  { path:'donating',component:DonatingbloodComponent},
  { path:'checkingdonation',component:CheckingdonationComponent},
  { path:'loginadmin',component:LoginadminComponent},
  { path:'logoutdonor',component:LogoutdonorComponent},
  { path:'logoutadmin',component:LogoutadminComponent},
  { path:'pnfrequester',component:RequesterpagenotfoundComponent},
  { path:'pnfdonor',component:DonorpagenotfoundComponent},
  { path:'correct',component:DonationapprovedComponent},
  { path:'mistake',component:DonationrejectedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
