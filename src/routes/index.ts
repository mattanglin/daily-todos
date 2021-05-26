import { connectRoutes } from 'redux-first-router';
import restoreScroll from 'redux-first-router-restore-scroll';
import { routesMap } from './routesMap';
import { onBeforeChange } from './onBeforeChange';
import * as actions from './actions';

// RFR Setup
const {
  enhancer: routeEnhancer,
  middleware: routerMiddleware,
  reducer,
} = connectRoutes(routesMap, {
  basename: process.env.NODE_ENV === 'production' ? '/daily-todos' : '',
  onBeforeChange,
  restoreScroll: restoreScroll(),
});

// Route Constants
export * from './constants';

export {
  routesMap,
  onBeforeChange,
  routeEnhancer,
  routerMiddleware,

  actions,
};

export default reducer;