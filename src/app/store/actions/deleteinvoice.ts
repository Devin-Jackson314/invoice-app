import { createAction, props } from "@ngrx/store";

export const invokeDelete = createAction(
  '[Books API] Inovke delete book api',
  props<{id:number}>()
);
 
export const deleteSuccess = createAction(
  '[Books API] deleted book api success',
  props<any>()
);