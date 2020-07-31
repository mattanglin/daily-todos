import { combineReducers } from 'redux';

import location from 'routes';
import todos from './todos';

export default combineReducers({
  location,
  todos,
});
