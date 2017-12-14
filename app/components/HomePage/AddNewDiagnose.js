import React, { Component } from "react";
import { Row, Col, Table, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
var DatePicker = require("react-bootstrap-date-picker");

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddNewDiagnose extends Component { // eslint-disable-line react/prefer-stateless-function

	constructor (props) {
    super(props);
    this.state ={
       value :new Date().toISOString()
    }
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e){
  	e.preventDefault();
  	let form = e.target
		// let diagnoseDate = form.elements.diagnoseDate.value;
		let diagnoseText = form.elements.diagnoseText.value;
		let diagnoseNote = form.elements.diagnoseNote.value;
		this.props.addNewDiagnose({
			diagnoseDate: this.state.value,
			diagnoseText: diagnoseText,
			diagnoseNote: diagnoseNote
		});
  }
  handleChange(value) {
    this.setState({
      value: value// ISO String, ex: "2016-11-19T12:00:00.000Z"
    });
  }
  render() {
    return (
      <div>
        <Row className="diagnose-addNew-header">
          <Col sm={3} md={6} className="header-text">
            <div >Add New</div>
          </Col>
	      </Row>
      	<form onSubmit={this.formSubmit}>
          <FormGroup>
            <ControlLabel>Date of Diagnoses</ControlLabel>
            <DatePicker className="input-color" id="diagnoseDate" value={this.state.value} onChange={(value)=>{this.handleChange(value)}} />
          </FormGroup>
  		    <FieldGroup
            className="input-color"
  		      id="diagnoseText"
  		      type="text"
  		      label="Diagnose"
  		    />
  		    <FieldGroup
  		      id="diagnoseNote"
  		      label="Notes"
    		    type="textarea"
            rows={4}
            className="text-area input-color"
  		    />
          <Row>
            <Col sm={3} md={6} className="header-text">
              <Button onClick={()=>{this.props.closeAddNewModal()}} className="close-button" >
                Cancel
              </Button>
            </Col>
    	      <Col sm={3} md={6} className="text-right">
              <Button className="close-button" type="submit">
                Save
              </Button>
    	      </Col>
          </Row>
  	    </form>
      </div>
    );
  }
}

export default AddNewDiagnose
