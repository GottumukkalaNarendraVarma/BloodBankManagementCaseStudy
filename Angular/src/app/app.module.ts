import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestbloodComponent } from './requestblood/requestblood.component';
import { ApproverequestComponent } from './approverequest/approverequest.component';
import { DonatebloodComponent } from './donateblood/donateblood.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { RequestersListComponent } from './requesters-list/requesters-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { RegisterdonorComponent } from './registerdonor/registerdonor.component';
import { RegisterrequestorComponent } from './registerrequestor/registerrequestor.component';
import { BloodavalibiltyComponent } from './bloodavalibilty/bloodavalibilty.component';
import { LoginDonorComponent} from './logindonor/logindonor.component';
import { RegisterComponent } from './register/register.component';
import { LoginrequestorComponent } from './loginrequestor/loginrequestor.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { RequestersuccessComponent } from './requestersuccess/requestersuccess.component';
import { DonorsuccessComponent } from './donorsuccess/donorsuccess.component';
import { LogoutComponent } from './logout/logout.component';
import { RequestapprovedComponent } from './requestapproved/requestapproved.component';
import { RequestrejectedComponent } from './requestrejected/requestrejected.component';
import { RequestingbloodComponent } from './requestingblood/requestingblood.component';
import { CheckingstatusComponent } from './checkingstatus/checkingstatus.component';
import { DonatingbloodComponent } from './donatingblood/donatingblood.component';
import { CheckingdonationComponent } from './checkingdonation/checkingdonation.component';
import { LogoutdonorComponent } from './logoutdonor/logoutdonor.component';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { RequesterpagenotfoundComponent } from './requesterpagenotfound/requesterpagenotfound.component';
import { DonorpagenotfoundComponent } from './donorpagenotfound/donorpagenotfound.component';
import { DonationapprovedComponent } from './donationapproved/donationapproved.component';
import { DonationrejectedComponent } from './donationrejected/donationrejected.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestbloodComponent,
    ApproverequestComponent,
    DonatebloodComponent,
    DonorsListComponent,
    RequestersListComponent,
    AboutusComponent,
    RegisterdonorComponent,
    RegisterrequestorComponent,
    BloodavalibiltyComponent,
    RegisterComponent,
    LoginrequestorComponent,
    LoginDonorComponent,
    LoginadminComponent,
    RequestersuccessComponent,
    DonorsuccessComponent,
    LogoutComponent,
    RequestapprovedComponent,
    RequestrejectedComponent,
    RequestingbloodComponent,
    CheckingstatusComponent,
    DonatingbloodComponent,
    CheckingdonationComponent,
    LogoutdonorComponent,
    LogoutadminComponent,
    RequesterpagenotfoundComponent,
    DonorpagenotfoundComponent,
    DonationapprovedComponent,
    DonationrejectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
