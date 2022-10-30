import { Injectable } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { loadInvoicess,loadInvoicessSuccess } from "../actions/invoices.actions";

@Injectable()

export class loadInvoicesEffect {

    constructor(private actions$: Actions, private dataService: DataService){}

    loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadInvoicess),
        exhaustMap(() => this.dataService.getData().pipe(
            map(invoice => loadInvoicessSuccess(invoice))
        ))
    )
    )
}

