import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { DataService } from "src/app/services/data.service";
import { Invoices } from "src/app/invoicedata";
import { invokeEdit, invokeEditSuccess } from "../actions/editinvoices.actions";
import { viewInvoice } from "../selectors/viewinvoices.selectors";
import { Appstate } from "../Shared/appstate";
import { setAPIStatus } from "../Shared/app.action";

@Injectable()

export class editEffect{
    constructor(private actions$: Actions, private dataService: DataService,  private store: Store,
    private appStore: Store<Appstate>) {}
// editInvoice$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(invokeEdit),
//       switchMap((action) => {
//         this.appStore.dispatch(
//           setAPIStatus({ apiStatus: { ResponseMessage: '', Status: '' } })
//         );
//         return this.dataService.editInvoice(action.editInvoice).pipe(
//           map((data) => {
//             this.appStore.dispatch(
//               setAPIStatus({
//                 apiStatus: { ResponseMessage: '', Status: 'success' },
//               })
//             );
//               return invokeEditSuccess({ editInvoice: data});
//           })
//         );
//       })
//     );
//   });
}
