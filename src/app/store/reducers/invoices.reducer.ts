import { createReducer, on } from '@ngrx/store';
import { loadInvoicessSuccess } from '../actions/invoices.actions';
import { newInvoiceSuccess } from '../actions/newinvoice.actions';




export const initialState: object = {

};

export const InvoicesReducer = createReducer(
  initialState,

  on(loadInvoicessSuccess, (state, invoices) => invoices),

  on(newInvoiceSuccess, (state, { newInvoice }) => {
    let newState = [{...state}];
    newState.unshift(newInvoice);
      return newState
    })

);


//  on(newInvoiceSuccess, (state, invoices) => {
//         const payload = {...invoices}
//         delete payload.uuid
//         return {...state, [invoices.uuid.name]:payload}
//     })
