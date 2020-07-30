import { RootState } from 'state-types';

export const getLocation = (state: RootState) => state.location;
export const getLocationType = (state: RootState) => state.location.type;
export const getUsername = (state: RootState) => state.location.payload.username;
export const getRecipeId = (state: RootState) => state.location.payload.recipeId;