import {
  applyMiddleware,
  createStore as createReduxStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { routeEnhancer, routerMiddleware } from 'routes';
import rootReducer from './root-reducer';

// Configured createStore
export const createStore = () => {
  const store = createReduxStore(
    rootReducer,
    composeWithDevTools(
      routeEnhancer,
      applyMiddleware(
        routerMiddleware,
        thunk,
      )
    )
  );

  return store;
};
