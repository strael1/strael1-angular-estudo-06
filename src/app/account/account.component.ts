import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent  {
   @Input('cc') account!: {accountName: string, status: string};
  
  constructor(){
    console.log(this.account);
  }
}
