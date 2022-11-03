import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { DataService } from "src/app/services/data.service";
import { Invoices } from "src/app/invoicedata";
import { invokeDelete,deleteSuccess  } from "../actions/deleteinvoice";
import { viewInvoice } from "../selectors/viewinvoices.selectors";
import { Appstate } from "../Shared/appstate";
import { setAPIStatus } from "../Shared/app.action";

@Injectable()

export class deleteEffect {
    constructor(private actions$: Actions, private dataService: DataService, private store: Store,
        private appStore: Store<Appstate>) { }
deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDelete),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { ResponseMessage: '', Status: '' } })
        );
        return this.dataService.deleteInvoice(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { ResponseMessage: '', Status: 'success' },
              })
            );
            return deleteSuccess({ id: actions.id });
          })
        );
      })
    );
  });
}





