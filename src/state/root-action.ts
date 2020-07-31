import { actions as routeActions } from 'routes';
import { actions as todoActions } from 'state/todos';

export default {
  location: routeActions,
  todos: todoActions,
}
