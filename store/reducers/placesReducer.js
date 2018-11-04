import { ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
  places: [],
  selectedPlace: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, {
          name: action.placeName,
          image: {uri: 'http://www.capetown.travel/wp-content/uploads/2016/07/camps_bay_grass-2.jpg'},
          key: Math.random()
        }],
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null,
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => (place.key === action.key))
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default: return state;
  };
};

export default reducer;