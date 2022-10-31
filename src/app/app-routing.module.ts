import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';

const routes: Routes = [
  {path: "", redirectTo: "/invoices", pathMatch: "full"},
  { path: 'invoices', component: InvoicesComponent },
  { path: 'view/:id', component: ViewInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
