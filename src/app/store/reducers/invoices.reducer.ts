import { createReducer, on } from '@ngrx/store';
import { Invoices } from 'src/app/invoicedata';
import { loadInvoicessSuccess } from '../actions/invoices.actions';
import { newInvoice, newInvoiceSuccess } from '../actions/newinvoice.actions';
import { DataService } from 'src/app/services/data.service';
import { invokeDelete } from '../actions/deleteinvoice.action';
import { deleteSuccess } from '../actions/deleteinvoice.action';




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
    const invoiceState = { ...state}
    const InvoiceArray: Invoices[] = [];
    
    Object.keys(invoiceState).forEach((key: any) => {
      //console.log(invoiceState,[key] , 'invoice state');
      console.log(key, "key")
     
       
   
      // if(invoiceState[key] = invoiceState.clientName) {
      //   InvoiceArray.push({...invoiceState[key]})
      // }
    })
    // InvoiceArray = [...invoiceState]
   // console.log(invoiceState, "invoiceState")
    InvoiceArray.push(payload)
    return InvoiceArray
  }),

  // on(deleteSuccess, (state, id: any) => {
  
  //   let newState =state.filter((_) => _.id != id);
  //   return newState;
  // })
  on(invokeDelete, (state, payload) =>{
    const deleteState = { ...state }
    const invoiceArray: Invoices[] = [];
    let firbaseKey = '';
    Object.values(payload).forEach((key: any) => {
      firbaseKey += key
    })

    // Object.keys(deleteState).forEach((key: any) => {
    //   if (key !== firbaseKey.split('[')[0]) {
    //     invoiceArray.push({ ...deleteState[key]});
    //   }
    // })

    invoiceArray.pop();
    return invoiceArray
  })

  


);


//  on(newInvoiceSuccess, (state, invoices) => {
//         const payload = {...invoices}
//         delete payload.uuid
//         return {...state, [invoices.uuid.name]:payload}
//     })
