import React, { Component } from "react";
import { Table, Row, Col, Button } from 'react-bootstrap';
import DiagnoseListHeader from './DiagnoseListHeader';

class DiagnosesList extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
  }
  
  render() {
    let listData = this.props.list.map((row)=>{
      return (
        <tr key={row.id}>
          <td>{row.date}</td>
          <td>{row.diagnosis}</td>
          <td>{row.diagnoseType}</td>
          <td>{row.notice}</td>
          <td>{row.actuaryInfo}</td>
        </tr>
      )
    })

    return (
      <div>
        <DiagnoseListHeader addNewDiagnose={this.props.addNewDiagnose}/>
      	<Table responsive className="diagnose-list">
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
        <div>       
          <Row>
            <Col sm={3} md={6}></Col>
            <Col sm={3} md={6} className="text-right">
              <Button className="btn close-button" onClick={this.props.closeModal}>Close</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DiagnosesList