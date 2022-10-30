import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Invoices} from 'src/app/invoicedata';

export const InvoicesSelector = createSelector(
    createFeatureSelector('invoices'),
    (state: Invoices[]) =>{
        const invoiceState = {...state}
        const invoiceArray: Invoices[] = [];
        Object.keys(invoiceState).forEach((invoice: any) => {
            invoiceArray.push({...invoiceState[invoice]})
        })
        invoiceArray.pop()
        console.log(invoiceArray)
        return invoiceArray
    }
)