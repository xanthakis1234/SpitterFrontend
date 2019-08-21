import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	signupForm: FormGroup;
	
	ngOnInit(){
		this.signupForm = new FormGroup({ 
			'username': new FormControl(null),
			'firstname': new FormControl(null),
			'lastname': new FormControl(null),
			'password': new FormControl(null),
			'id': new FormControl(null)
		 });

	}
	
	
}
