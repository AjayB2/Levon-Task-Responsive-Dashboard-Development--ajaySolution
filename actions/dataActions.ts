import { FETCH_DATA, UPDATE_DATA } from './types';

export function fetchData() {
  return { type: FETCH_DATA };
}

export function updateData(data) {
  return { type: UPDATE_DATA, data };
}