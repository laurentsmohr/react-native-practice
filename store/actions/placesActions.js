import { ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE } from './actionTypes'

export const addPlace = placeName => ({
  type: ADD_PLACE,
  placeName: placeName
})

export const deletePlace = () => ({
  type: DELETE_PLACE
})

export const selectPlace = key => ({
  type: SELECT_PLACE,
  key
})

export const deselectPlace = () => ({
  type: DESELECT_PLACE
})