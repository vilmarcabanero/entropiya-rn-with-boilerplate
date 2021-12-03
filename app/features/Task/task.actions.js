/*
 * Reducer actions related with Task
 */
import * as Types from './task.types';

export function setTask(data) {
  return {
    type: Types.SET_TASK,
    data,
  };
}

export function getTask() {
  return {
    type: Types.GET_TASK,
  };
}
