import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spitters',
  templateUrl: './spitters.component.html',
  styleUrls: ['./spitters.component.css']
})
export class SpittersComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show"; 
  }
}
