import {createAction} from 'redux-actions';
import * as constants from './constants';

export const diagnoseListRequest = createAction(constants.DIAGNOSE_LIST_REQUEST);
export const diagnoseListSuccess = createAction(constants.DIAGNOSE_LIST_SUCCESS);
export const diagnoseListError = createAction(constants.DIAGNOSE_LIST_ERROR);

export const addDiagnoseListRequest = createAction(constants.ADD_DIAGNOSE_LIST_REQUEST);
