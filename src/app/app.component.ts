import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-project';

  accounts: any = [];
  
  getAccountData(accountData: { accountName: string, status: string }) {
    this.accounts.push({
      accountName: accountData.accountName,
      status: accountData.status 
    });

    console.log(this.accounts);
  }

}
