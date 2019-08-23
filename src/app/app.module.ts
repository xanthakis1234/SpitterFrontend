import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule} from '@angular/router';
import { AllSpittersComponent } from './all-spitters-component/all-spitters.component';
import { SpittlesComponent } from './all-spitters-component/spittles/spittles.component';
import { ViewAccountComponent } from './account/view-account/view-account.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';
import { DeleteAccountComponent } from './account/delete-account/delete-account.component';
import { RegisterComponent } from './register/register.component';
import { SpittersComponent } from './all-spitters-component/spitters/spitters.component';
import { SpittleComponent } from './all-spitters-component/spittle/spittle.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes =[
	{ path: '', component:AllSpittersComponent},
	{ path: 'spittles', component:SpittlesComponent},
	{ path: 'viewAccount', component:ViewAccountComponent},
	{ path: 'register', component:RegisterComponent},
	{ path: 'account', component:AccountComponent},
];

@NgModule({
  declarations: [
	AppComponent,
	HeaderComponent,
	AllSpittersComponent,
	SpittlesComponent,
	ViewAccountComponent,
	UpdateAccountComponent,
	DeleteAccountComponent,
	RegisterComponent,
	SpittersComponent,
	SpittleComponent,
	AccountComponent
  ],
  imports: [
	BrowserModule, 
	RouterModule.forRoot(appRoutes),
	ReactiveFormsModule,
	NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
