import { combineReducers } from "redux";

import AppState from "./AppState";
import { placeReducer } from "./components/PlaceSearch/State/Reducer";

export const initialState: AppState = {
  searchText: '',
  loading: false,
  places: [],
  error: ''
};

export const rootReducer = combineReducers({
  places: placeReducer
});
