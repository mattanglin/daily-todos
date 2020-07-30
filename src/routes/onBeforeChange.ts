import { StateGetter, Bag } from 'redux-first-router';
import { Dispatch } from 'redux';


export const onBeforeChange = (dispatch: Dispatch, getState: StateGetter, bag: Bag): void => {
  const state = getState();
  // const routeType = bag.action.type;

  // Do something
  if (state) {

  }

  // Custom Route handling
};