/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_DATA_SUCCESS,
} from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return state.set('data', action.payload);
    default:
      return state;
  }
}

export default loginReducer;
