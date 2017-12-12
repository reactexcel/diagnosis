import axios from "axios";

// import {
//   CHANGE_LOCALE,
// } from './constants';

export function getDiagnosesList() {
  return function(dispatch) {
    return axios.get('http://dbtest.domacare.fi:5000/diagnoses?expand=author')
      .then((response) => {
        return {
          error: false,
          data: response
        }
      })
      .catch((err) => {
        return {
          error: true,
          data: []
        }
      })
  }
}
