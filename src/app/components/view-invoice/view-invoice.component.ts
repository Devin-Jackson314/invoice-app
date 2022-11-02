import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { InvoicesSelector } from 'src/app/store/selectors/invoices.selectors';
import { viewInvoice } from 'src/app/store/selectors/viewinvoices.selectors';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  myInvoice$: any;
  
  invoiceForm = this.formBuilder.group({
    BillersAddress: '',
    City: '',
    PostCode: '',
    Country: '',
    ClientsName: '',
    ClientsEmail: '',
    ClientAddress: '',
    ClientsCity: '',
    ClientPostCode: '',
    ClientsCountry: '',
    InvoiceDate: '',
    PaymentTerms: '',
    ProjectDescription: '',
    ItemName: '',
    Qty: '',
    Price: '',
    Total: '',
    ItemName2: '',

  });
 

  constructor(private dataservice: DataService, private store: Store, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

 
  
 
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
     this.myInvoice$ = this.store.select(viewInvoice(id))
  }

}
