import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { InvoicesSelector } from 'src/app/store/selectors/invoices.selectors';
import { Invoices } from 'src/app/invoicedata';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  myData: any;
  Filter: any;

  constructor(private dataservice: DataService, private store: Store, private forms: FormsModule) { 

  }

  myInvoices$ = this.store.select(InvoicesSelector)

  ngOnInit(): void {
  
  }

  // getMyData() {
  //    return this.dataservice.getData().subscribe((data) => {
  //    this.myData = data
  //     //console.log(data, "Here is your data");
  //      console.log(this.myData);
      
   
      
      
  //   })
  
  

  // }

}
