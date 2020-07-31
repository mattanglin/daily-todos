declare module 'state-types' {
  import { StateType, ActionType, Types } from 'typesafe-actions'
  import { ThunkDispatch } from 'redux-thunk'
  import { AnyAction } from 'redux'

  export type RootState = StateType<typeof import('./root-reducer').default>
  export type RootAction = ActionType<typeof import('./root-action').default>
  export type GetState = () => RootState
  export type Dispatch = ThunkDispatch<RootState, null, AnyAction>
  export type Thunk<T = any> = (dispatch: Dispatch, getState: GetState) => Promise<T> | T;
}
