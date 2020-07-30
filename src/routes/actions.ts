/**
 * TODO: Move these actions to state/location/actions.ts?
 */
import { createAction } from 'typesafe-actions';
import {
  HOME_PAGE,
} from './constants';

// General
export const homePage = createAction(HOME_PAGE);
