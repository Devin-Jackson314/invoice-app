import { Injectable } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { newInvoice, newInvoiceSuccess } from "../actions/newinvoice.actions"; 
import { map, concatMap } from "rxjs";

@Injectable()

export class newInvoiceEffect {
    constructor( private actions$: Actions, private dataService: DataService){}

    newInvoice$ = createEffect(() => 
        this.actions$.pipe(
            ofType(newInvoice),
            concatMap((newInvoice) =>
            this.dataService.newInvoice(newInvoice).pipe(
                map((uuid) => newInvoiceSuccess({...newInvoice, uuid}))
            )
            )
        )
    )
}