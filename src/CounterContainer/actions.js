import {
  LOAD_COUNTERS,
  LOAD_COUNTERS_SUCCESS,
  ADD_COUNTER,
  DELETE_COUNTER,
  INCREMENT,
  DECREMENT,
} from './constants';

export function loadCounters() {
  return {
    type: LOAD_COUNTERS,
  };
}

export function countersLoaded(counters) {
  return {
    type: LOAD_COUNTERS_SUCCESS,
    counters,
  };
}

export function addCounterItem(title) {
  return {
    type: ADD_COUNTER,
    title,
  };
}

export function deleteCounterItem(id) {
  return {
    type: DELETE_COUNTER,
    id,
  };
}

export function increment(id) {
  return {
    type: INCREMENT,
    id,
  };
}

export function decrement(id) {
  return {
    type: DECREMENT,
    id,
  };
}
