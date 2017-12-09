import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import request from '../request';
import {
  LOAD_COUNTERS,
  ADD_COUNTER,
  DELETE_COUNTER,
  INCREMENT,
  DECREMENT,
} from './constants';
import { countersLoaded } from './actions';

function* getCounters() {
  const url = 'counters';
  try {
    const counters = yield call(request, url);
    yield put(countersLoaded(counters));
  } catch (e) {
    console.error(e);
  }
}

function* countersData() {
  yield takeLatest(LOAD_COUNTERS, getCounters);
}

function* addCounter(action) {
  const payload = {
    title: action.title,
  };
  const url = 'counter';
  const options = {
    method: 'POST',
    headers: new Headers({
		  'Content-Type': 'application/json',
	  }),
    body: JSON.stringify(payload),
  };
  try {
    const counters = yield call(request, url, options);
    yield put(countersLoaded(counters));
  } catch (e) {
    console.log(e);
  }
}

function* deleteCounter(action) {
  const payload = {
    id: action.id,
  };
  const url = 'counter';
  const options = {
    method: 'DELETE',
    headers: new Headers({
		  'Content-Type': 'application/json',
	  }),
    body: JSON.stringify(payload),
  };
  try {
    const counters = yield call(request, url, options);
    yield put(countersLoaded(counters));
  } catch (e) {
    console.log(e);
  }
}

function* increment(action) {
  const payload = {
    id: action.id,
  };
  const url = 'counter/inc';
  const options = {
    method: 'POST',
    headers: new Headers({
		  'Content-Type': 'application/json',
	  }),
    body: JSON.stringify(payload),
  };
  try {
    const counters = yield call(request, url, options);
    yield put(countersLoaded(counters));
  } catch (e) {
    console.log(e);
  }
}

function* decrement(action) {
  const payload = {
    id: action.id,
  };
  const url = 'counter/dec';
  const options = {
    method: 'POST',
    headers: new Headers({
		  'Content-Type': 'application/json',
	  }),
    body: JSON.stringify(payload),
  };
  try {
    const counters = yield call(request, url, options);
    yield put(countersLoaded(counters));
  } catch (e) {
    console.log(e);
  }
}

function* watchAddCounter() {
  yield takeEvery(ADD_COUNTER, addCounter);
}

function* watchDeleteCounter() {
  yield takeEvery(DELETE_COUNTER, deleteCounter);
}

function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}

export default function* counterSagas() {
  yield all([
    countersData(),
    watchAddCounter(),
    watchDeleteCounter(),
    watchIncrement(),
    watchDecrement(),
  ]);
}
