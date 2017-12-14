import axios from "axios";
import mockJson from "./mock.json";
import * as CONSTANTS from './constants';

export function getDiagnoses() {
  return axios.get('http://localhost:3000/')
    .then((response) => {
      return  ({
        type: CONSTANTS.DIAGNOSE_LIST_SUCCESS,
        diagnosesList: mockJson,
      });
    })
    .catch((err) => {
      return  ( {
        type: CONSTANTS.DIAGNOSE_LIST_ERROR,
        diagnosesList: []
      });
    })
}

export function addDiagnoses() {
  return axios.get('http://localhost:3000/')
  .then(function (response) {
    return ({
      type:'success'
    });
  })
  .catch(function (error) {
    return ({
      type:'error'
    });
  });
}
