import React, { Component } from "react";
import { Table, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e){
  	e.preventDefault();
  	let form = e.target
		let diagnoseDate = form.elements.diagnoseDate.value;
		let diagnoseText = form.elements.diagnoseText.value;
		let diagnoseNote = form.elements.diagnoseNote.value;
		this.props.addNewDiagnose({
			diagnoseDate: diagnoseDate,
			diagnoseText: diagnoseText,
			diagnoseNote: diagnoseNote
		});
  }
  
  render() {
    return (
    	<form onSubmit={this.formSubmit}>
		    <FieldGroup
		      id="diagnoseDate"
		      type="text"
		      label="Date of Diagnose"
		    />
		    <FieldGroup
		      id="diagnoseText"
		      type="text"
		      label="Diagnose"
		    />
		    <FieldGroup
		      id="diagnoseNote"
		      label="Notes"
		      type="textarea"
		    />
		    <Button type="submit">
	      Submit
	    </Button>
	  </form>
    );
  }
}

export default AddNewDiagnose