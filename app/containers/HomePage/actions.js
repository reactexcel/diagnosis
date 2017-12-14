import axios from "axios";
import {call, put} from 'redux-saga/effects';
import * as actions from './action';
import * as constants from './constants';

import { getDiagnoses, addDiagnoses } from './service';
import mockJson from "./mock.json";

export function* getDiagnosesList(action) {
    try {
      const response = yield call(getDiagnoses);
      if (response.diagnosesList !==[] ) {
        yield put(actions.diagnoseListSuccess(response));
      } else {
        yield put(actions.diagnoseListError(response));
      }
    } catch (e) {
      console.warn('Some error found in "manual" action\n', e);
    }
}

export function* addNewDiagnose(action){
    try {
      const response = yield call(getDiagnoses);
      if (response.type === "success") {
        yield put(actions.diagnoseListSuccess(response));
      } else {
        yield put(actions.diagnoseListError(response));
      }
    } catch (e) {
      console.warn('Some error found in "manual" action\n', e);
    }
}
