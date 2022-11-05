import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { InvoicesSelector } from 'src/app/store/selectors/invoices.selectors';
import { Invoices } from 'src/app/invoicedata';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { newInvoice } from 'src/app/store/actions/newinvoice.actions';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  myData: any;
  Filter: any;
  invoiceObject: any;

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
//const invoiceObject = {} as Invoices


  //  invoiceObject = {
  //   clientAddress :{
  //     city: '',
  //     country: '',
  //      postCode: '',
  //      street: '',
  //    },
  //    clientEmail: '',
  //     clientName:'',
  //    createdAt: '',
  //    description: '',
  //    id: '',
  //    items: [Object],
  //   paymentDue: '',
  //   paymentTerms: Number,
  //   senderAddress: {
  //       city: '',
  //       country: '',
  //       postCode: '',
  //       street: ''
        
  //   },
  //   status: '',
  //   total: Number,
       
     

  //  }

  constructor(private dataservice: DataService, private store: Store, private forms: FormsModule, private formBuilder: FormBuilder) { 

  }

  myInvoices$ = this.store.select(InvoicesSelector)

  ngOnInit(): void {
  
  }
  onSubmit(status: string): void {
    this.invoiceObject = {
      clientAddress: {
        city: this.invoiceForm.value.City,
        country: this.invoiceForm.value.Country,
        postCode: this.invoiceForm.value.PostCode,
        street: this.invoiceForm.value.BillersAddress,
      },
      clientEmail: this.invoiceForm.value.ClientsEmail,
      clientName: this.invoiceForm.value.ClientsName,
      createdAt: this.invoiceForm.value.InvoiceDate,
      description: this.invoiceForm.value.ProjectDescription,
      id: this.generateId(),
      items: [
        {
          name: 'Dave',
          price: 1809,
          quantity: 1,
          total: 1
        }
      ],
      paymentDue: this.invoiceForm.value.InvoiceDate,
      paymentTerms: this.invoiceForm.value.PaymentTerms,
      senderAddress: {
        city: this.invoiceForm.value.ClientsCity,
        country: this.invoiceForm.value.ClientsCountry,
        postCode: this.invoiceForm.value.ClientPostCode,
        street: this.invoiceForm.value.ClientAddress
        
      },
      status: status,
      total: this.total()
       
     

    }
    this.store.dispatch(newInvoice({ payload: {...this.invoiceObject }}))
  }

  generateId() {
    return 'RT1234'
  }

  total() {
    
  }

  save() {
     this.invoiceObject = {
    clientAddress :{
      city: this.invoiceForm.value.City,
      country: this.invoiceForm.value.Country,
       postCode: this.invoiceForm.value.PostCode,
       street: this.invoiceForm.value.BillersAddress,
     },
     clientEmail: this.invoiceForm.value.ClientsEmail,
      clientName:this.invoiceForm.value.ClientsName,
     createdAt: this.invoiceForm.value.InvoiceDate,
     description: this.invoiceForm.value.ProjectDescription,
     id: this.generateId(),
        items: [
          {
            name: 'Dave',
            price: 1809,
            quantity: 1,
            total: 1
          }
     ],
    paymentDue:  this.invoiceForm.value.InvoiceDate,
    paymentTerms: this.invoiceForm.value.PaymentTerms,
    senderAddress: {
        city: this.invoiceForm.value.ClientsCity,
        country: this.invoiceForm.value.ClientsCountry,
        postCode: this.invoiceForm.value.ClientPostCode,
        street: this.invoiceForm.value.ClientAddress
        
    },
    status: 'pending',
    total: this.total()
       
     

   }
    this.store.dispatch(newInvoice({ payload: this.invoiceObject }));
    
  }

  // toggleForm() {
  //   document.getElementById('form')?.classList.toggle('toggle');
  //    document.getElementById('clickForm')!.style.marginLeft = "0";
  // }

openForm() {
  
  const form = document.getElementsByClassName('formContainer',) as HTMLCollectionOf<HTMLElement>; 

  for (let i = 0; i < form.length; i++) {
  form[i].style.display = 'block';
}
    
  }








  // getMyData() {
  //    return this.dataservice.getData().subscribe((data) => {
  //    this.myData = data
  //     //console.log(data, "Here is your data");
  //      console.log(this.myData);
      
   
      
      
  //   })
  
  

  // }

}
