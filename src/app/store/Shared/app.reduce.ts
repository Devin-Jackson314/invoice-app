import { createReducer, on } from '@ngrx/store';
import { setAPIStatus } from './app.action';
import { Appstate } from './appstate';
 
export const initialState: Readonly<Appstate> = {
  ResponseMessage: '',
  Status: '',
};
 
export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus
    };
  })
);