import { FETCH_DATA, UPDATE_DATA } from '../actions/types';

const initialState = {
  data: []
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.data };
    case UPDATE_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
}