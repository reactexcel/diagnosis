import axios from "axios";

import {
  DIAGNOSE_LIST,
} from './constants';

import mockJson from "./mock.json"

export function getDiagnosesList() {
  return function(dispatch) {
    // return axios.get('http://dbtest.domacare.fi:5000/diagnoses?expand=author')
    return axios.get('http://localhost:3000/')
      .then((response) => {
        return dispatch ( {
          type: DIAGNOSE_LIST,
          // diagnoseList: response.data,
          diagnosesList: mockJson,
        });
      })
      .catch((err) => {
        return dispatch ( {
          type: DIAGNOSE_LIST,
          diagnosesList: []
        });
      })
  }
}

export function addNewDiagnose(data){
  return function(dispatch){
    // return axios.post('http://dbtest.domacare.fi:5000/diagnoses', {
    return axios.get('http://localhost:3000/')
    .then(function (response) {
      return dispatch( getDiagnosesList() );
    })
    .catch(function (error) {
      return dispatch( getDiagnosesList() );
    });
  }
}
