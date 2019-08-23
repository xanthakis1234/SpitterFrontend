import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  
  constructor() {}

  ngOnInit(){}

  toggle(){
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show"; 
  }
}
