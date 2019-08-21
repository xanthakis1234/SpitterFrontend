import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule} from '@angular/router';
import { AllSpittersComponent } from './all-spitters-component/all-spitters.component';
import { SpittlesComponent } from './spittles/spittles.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes =[
	{ path: 'AllSpitters', component:AllSpittersComponent},
	{ path: 'Spittles', component:SpittlesComponent},
	{ path: 'ViewAccount', component:ViewAccountComponent},
	{ path: 'UpdateAccount', component:UpdateAccountComponent},
	{ path: 'DeleteAccount', component:DeleteAccountComponent},
	{ path: 'Register', component:RegisterComponent} 
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
	RegisterComponent
  ],
  imports: [
	BrowserModule, 
	RouterModule.forRoot(appRoutes),
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
