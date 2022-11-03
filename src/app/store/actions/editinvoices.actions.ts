import { createAction, props } from "@ngrx/store";
import { Invoices } from "src/app/invoicedata";

export const invokeEdit = createAction(
    '[Invoices] Invoke edit Invoices',
    props<{ editInvoice: Invoices }>()
);

export const invokeEditSuccess = createAction(
    '[Invoices] Invoke edit sucess',
    props<{editInvoice: Invoices}>()
);