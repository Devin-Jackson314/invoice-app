import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { InvoicesSelector } from 'src/app/store/selectors/invoices.selectors';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  myData: any;

  constructor(private dataservice: DataService, private store: Store) { 

  }

  myInvoices$ = this.store.select(InvoicesSelector)

  ngOnInit(): void {
    this.getMyData();
  }

  getMyData() {
     return this.dataservice.getData().subscribe((data) => {
     this.myData = data
      console.log(data, "Here is your data");
       console.log(this.myData);
      
   
      
      
    })
  
  

  }

}
