import { createReducer, on } from '@ngrx/store';
import { loadInvoicessSuccess } from '../actions/invoices.actions';


export const invoicesFeatureKey = 'invoices';

export interface State {

}

export const initialState: State = {

};

export const InvoicesReducer = createReducer(
  initialState,

  on(loadInvoicessSuccess, (State, invoices) => invoices)

);
