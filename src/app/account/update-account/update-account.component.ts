import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  updateForm: FormGroup;
  public show: boolean = false;
  public buttonName:any = 'Show';
  
  
  constructor() { }

  ngOnInit() {
    this.updateForm = new FormGroup({ 
			'username': new FormControl(null),
			'firstname': new FormControl(null),
			'lastname': new FormControl(null),
			'password': new FormControl(null),
		 });

  }

  toggle(){
    this.show = !this.show;
    if (this.show)
      this.buttonName="Hide";
    else
      this.buttonName="Show";
  }

}
