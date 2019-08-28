import { Component, OnInit } from '@angular/core';
import { SpitterServiceService } from 'src/app/service/spitter-service.service';

export class Spitter{
  constructor(
    public firstname: string,
    public lastname: string,
    public username: string,
    public password: string,
    public spitterId: number
  ){}

}

@Component({
  selector: 'app-spitters',
  templateUrl: './spitters.component.html',
  styleUrls: ['./spitters.component.css']
})
export class SpittersComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  spitters: Spitter[];

  constructor(
    private spitterService:SpitterServiceService
  ) { }

  ngOnInit() {
    this.spitterService.retrieveAllSpitters().subscribe(
      response =>{
        console.log(response);
        this.spitters = response;
      }
    );
  }

  toggle(){
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show"; 
  }
}
