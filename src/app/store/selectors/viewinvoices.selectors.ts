import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Invoices } from 'src/app/invoicedata';

export const viewInvoice = (id: any) => createSelector(
    createFeatureSelector('invoices'),
    (state: Invoices[]) =>{
        const invoiceState = {...state}
        const invoiceArray: Invoices[] = [];
        Object.keys(invoiceState).forEach((invoice: any) => {
            if (id == invoiceState[invoice].id) {
             invoiceArray.push({ ...invoiceState[invoice] })
            }
            
        })
     
        console.log(invoiceArray)
        return invoiceArray
    }
)