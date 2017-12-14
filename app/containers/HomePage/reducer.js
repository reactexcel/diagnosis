/*
 *
 * DiagnoseList reducer
 *
 */

import { fromJS } from 'immutable';

import * as constants from './constants';

const initialState = fromJS({
  diagnosesList: [],
});

function diagnosesListReducer(state = initialState, action) {
  switch (action.type) {
    case constants.DIAGNOSE_LIST_SUCCESS:
      return state
        .set('diagnosesList', action.payload.diagnosesList);
    case constants.DIAGNOSE_LIST_ERROR:
      return state
        .set('diagnosesList', action.payload.diagnosesList);
    default:
      return state;
  }
}

export default diagnosesListReducer;
