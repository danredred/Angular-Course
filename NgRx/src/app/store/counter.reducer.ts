import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, actions) => state + actions.value),
  on(decrement, (state, actions) => state - actions.value),
  on(set,(state, action)=> action.value)
);
