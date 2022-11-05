import { Injectable } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { newInvoice, newInvoiceSuccess } from "../actions/newinvoice.actions"; 
import { map, concatMap,switchMap} from "rxjs";
import { Invoices } from "src/app/invoicedata";
import { setAPIStatus } from "../Shared/app.action";
import { Appstate } from "../Shared/appstate";
import { Store } from "@ngrx/store";
@Injectable()

export class newInvoiceEffect {
    constructor(private actions$: Actions, private dataService: DataService, private appStore: Store<Appstate>) { }
    newInvoice$ = createEffect(() => 
        this.actions$.pipe(
            ofType(newInvoice),
            switchMap((action) => {
       
                return this.dataService.newInvoice(action.payload)
                    .pipe(map((data) => newInvoiceSuccess({ response: data })))
            })
        )
    )
  

}
    




// newInvoice$ = createEffect(() => 
    //     this.actions$.pipe(
    //         ofType(newInvoice),
    //         switchMap((action) =>
    //         this.appStore.dispatch(setAPIStatus({Status:{RespsonseMessage: '', }})).pipe(
    //             map((uuid) => newInvoiceSuccess({...newInvoice, uuid}))
    //         )
    //         )
    //     )
   