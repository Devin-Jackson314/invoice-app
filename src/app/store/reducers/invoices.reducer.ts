import { createReducer, on } from '@ngrx/store';
import { loadInvoicessSuccess } from '../actions/invoices.actions';




export const initialState: object = {

};

export const InvoicesReducer = createReducer(
  initialState,

  on(loadInvoicessSuccess, (State, invoices) => invoices)

);
