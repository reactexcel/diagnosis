import {takeLatest} from 'redux-saga/effects';
import * as constants from './containers/HomePage/constants';
import { getDiagnosesList, addNewDiagnose } from './containers/HomePage/actions';

export function* watchActions () {
  yield takeLatest(constants.DIAGNOSE_LIST_REQUEST, getDiagnosesList);
  yield takeLatest(constants.ADD_DIAGNOSE_LIST_REQUEST, addNewDiagnose);
}


export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
