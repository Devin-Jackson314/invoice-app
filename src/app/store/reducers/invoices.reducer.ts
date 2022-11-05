import { createReducer, on } from '@ngrx/store';
import { Invoices } from 'src/app/invoicedata';
import { loadInvoicessSuccess } from '../actions/invoices.actions';
import { newInvoice, newInvoiceSuccess } from '../actions/newinvoice.actions';




export const initialState: object = {

};

export const InvoicesReducer = createReducer(
  initialState,

  on(loadInvoicessSuccess, (state, invoices) => invoices),

  on(newInvoiceSuccess, (state, { response}) => {
    let newState = [{...state}];
    newState.push(response)
      return newState
  }),
  on(newInvoice, (state, { payload }) => {
    const invoiceState = { ...state };
    const InvoiceArray: Invoices[] = [];
    const key = 'key' as string;
    Object.keys(invoiceState).forEach( (key:string) => {
      console.log(invoiceState,{ key }, 'invoice state');
      console.log(key, "key")
      
    })
    // InvoiceArray = [...invoiceState]
    console.log(invoiceState, "invoiceState")
    InvoiceArray.push(payload)
    return InvoiceArray
  })

);


//  on(newInvoiceSuccess, (state, invoices) => {
//         const payload = {...invoices}
//         delete payload.uuid
//         return {...state, [invoices.uuid.name]:payload}
//     })
