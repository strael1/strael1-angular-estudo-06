import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})

export class NewAccountComponent {

    @Output('accountData') accountData = new EventEmitter<{accountName: string, status: string}>();
    @ViewChild('newAccount') newAccount!: ElementRef;

    addNewAccount(accountName: string, status: string){
        this.accountData.emit({
            accountName: accountName,
            status: status
        })

        this.newAccount.nativeElement.value = '';
    }
}