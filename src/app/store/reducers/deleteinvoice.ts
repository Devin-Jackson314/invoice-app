
import { createReducer, on } from '@ngrx/store'
import { Invoices } from 'src/app/invoicedata';
import { deleteSuccess } from '../actions/deleteinvoice';


export const initialState: ReadonlyArray<Invoices> = [];
 
export const deleteInvoiceReducer = createReducer(
  initialState,
  
  on(deleteSuccess, (state, { id }) => {
    let newState =state.filter((_) => _.id != id);
    return newState;
  })
);