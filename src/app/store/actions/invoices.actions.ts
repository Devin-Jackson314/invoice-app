import { createAction, props } from '@ngrx/store';
import { Invoices} from 'src/app/invoicedata';

export const loadInvoicess = createAction(
  '[Invoices] Load Invoicess ',
  
);

export const loadInvoicessSuccess = createAction(
  'Load Invoicess Sucess',
  props<{invoices: Invoices}>()
)





