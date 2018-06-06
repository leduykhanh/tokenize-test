import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/HomePage/constants';
import { dataLoaded, dataLoadingError } from 'containers/HomePage/actions';

import request from 'utils/request';


export function* getData(action) {

  const requestURL = `http://206.189.40.141:8000/polls/data`;

  try {
    const options = {
      method: 'GET',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      //body: JSON.stringify(action.payload),
    };
    const data = yield call(request, requestURL, options);

    yield put(dataLoaded(data.data));
  } catch (err) {
    yield put(dataLoadingError(err.response));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* hompageSaga() {
  yield takeLatest(LOAD_DATA, getData);
}
