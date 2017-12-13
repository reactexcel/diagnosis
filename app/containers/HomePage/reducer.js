/*
 *
 * DiagnoseList reducer
 *
 */

import { fromJS } from 'immutable';

import {
  DIAGNOSE_LIST,
} from './constants';

const initialState = fromJS({
  diagnosesList: [],
});

function diagnosesListReducer(state = initialState, action) {
  switch (action.type) {
    case DIAGNOSE_LIST:
      return state
        .set('diagnosesList', action.diagnosesList);
    default:
      return state;
  }
}

export default diagnosesListReducer;