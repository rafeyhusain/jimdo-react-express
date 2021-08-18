import { AnyAction, Reducer } from "redux";

import AppState from '../../../AppState';
import { initialState } from "../../../reducer";
import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
    SET_SEARCH_TEXT
  } from './Types'

export const placeReducer: Reducer<AppState> = (
    state: AppState = initialState,
    action: AnyAction
  ): AppState => {
    switch (action.type) {
      case GET_PLACES_REQUEST:
        return {
          ...state,
          loading: true
        }
      case GET_PLACES_SUCCESS:
        return {
          ...state,
          loading: false,
          places: action.payload,
          error: ''
        }
      case GET_PLACES_FAILURE:
        return {
          ...state,
          loading: false,
          places: [],
          error: action.payload
        }
      case SET_SEARCH_TEXT:
        return {
          ...state,
          searchText: action.payload,
          loading: false
        }
      default: 
        return state
    }
  };
  