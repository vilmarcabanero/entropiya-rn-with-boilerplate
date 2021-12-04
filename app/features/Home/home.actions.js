/*
 * Reducer actions related with Home
 */
import * as Types from './home.types';

export function setHome(data) {
  return {
    type: Types.SET_HOME,
    data,
  };
}

export function getHome() {
  return {
    type: Types.GET_HOME,
  };
}
