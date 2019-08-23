import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAccountComponent } from 'src/app/account/delete-account/delete-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  
  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(){}

  toggle(){
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show"; 
  }

  openFormModal() {
    const modalRef = this.modalService.open(DeleteAccountComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
