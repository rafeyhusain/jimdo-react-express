import axios from 'axios'
import {
  GET_PLACES_REQUEST,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
  SET_SEARCH_TEXT
} from './Types'

export const getPlaces = (searchText: string) => (dispatch: any) => {
    dispatch(getPlacesRequest())

    const lat: number = 10 // TODO: Use location API
    const lng: number = 10
    const url = `http://localhost:8080/places/${searchText}/${lat}/${lng}`;
    
    axios
      .get(url)
      .then(response => {
        const places = response.data.places
        dispatch(getPlacesSuccess(places))
      })
      .catch(error => {
        dispatch(getPlacesFailure(error.message))
      });
}


export const getPlacesRequest = () => {
  return {
    type: GET_PLACES_REQUEST
  }
}

export const getPlacesSuccess = (places: any) => {
  return {
    type: GET_PLACES_SUCCESS,
    payload: places
  }
}

export const getPlacesFailure =  (error: string) => {
  return {
    type: GET_PLACES_FAILURE,
    payload: error
  }
}

export const setSearchText = (text: string) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: text
  }
}