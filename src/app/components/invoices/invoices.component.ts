import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  myData: any;

  constructor(private dataservice: DataService) { }

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
