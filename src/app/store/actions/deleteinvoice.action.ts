import { createAction, props } from "@ngrx/store";
import { Invoices } from "src/app/invoicedata";

export const invokeDelete = createAction(
  '[Invoices] Inovke delete ',
  props<Invoices>()
);
 
export const deleteSuccess = createAction(
  '[Invoices] deleted ',
    props<{id: any}>()
);