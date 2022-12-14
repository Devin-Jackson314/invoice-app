import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoicesReducer } from './store/reducers/invoices.reducer';
import { loadInvoicesEffect } from './store/effects/loadinvoices';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { appReducer } from './store/Shared/app.reduce';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    ViewInvoiceComponent,
    CreateInvoiceComponent,
    NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  
    StoreModule.forRoot( {
     invoices: InvoicesReducer, appState: appReducer
    }),

    EffectsModule.forRoot([loadInvoicesEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  

  providers: [DataService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
