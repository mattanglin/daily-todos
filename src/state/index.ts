import {
  applyMiddleware,
  createStore as createReduxStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { routeEnhancer, routerMiddleware } from 'routes';
import rootReducer from './root-reducer';
import { persistTodosMiddleware } from './persistTodosMiddleware';

// Configured createStore
export const createStore = () => {
  const store = createReduxStore(
    rootReducer,
    composeWithDevTools(
      routeEnhancer,
      applyMiddleware(
        routerMiddleware,
        thunk,
        persistTodosMiddleware,
      )
    )
  );

  return store;
};
