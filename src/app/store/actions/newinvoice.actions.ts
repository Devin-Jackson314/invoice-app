import { createAction, props } from '@ngrx/store';
import { Invoices } from 'src/app/invoicedata';

export const newInvoice = createAction('new Invoice', props<Invoices>())
export const newInvoiceSuccess = createAction(
    'newInvoiceSuccess',
    props<any>()
)