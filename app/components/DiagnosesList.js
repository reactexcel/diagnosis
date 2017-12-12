import React, { Component } from "react";
import { Table } from 'react-bootstrap';

export default class DiagnosesList extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
  }
  
  render() {
    let listData = this.props.list.map((row)=>{
      return (
        <tr>
          <td>{row.date}</td>
          <td>{row.diagnosis}</td>
          <td>{row.diagnoseType}</td>
          <td>{row.notice}</td>
          <td>{row.actuaryInfo}</td>
        </tr>
      )
    })

    return (
    	<Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Diagnose</th>
            <th>Type</th>
            <th>Notes</th>
            <th>Actuary</th>
          </tr>
        </thead>
        <tbody>
          {listData}
        </tbody>
      </Table>
    );
  }
}