import React, { Component } from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import ModalWindow from '../ModalWindow';
import AddNewDiagnose from './AddNewDiagnose';

class DiagnoseListHeader extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
    this.state = {
    	showModal: false
    };
    this.open = this.open.bind(this);
    this.addNewDiagnose = this.addNewDiagnose.bind(this);
  }

  open() {
	  this.setState({ 
	    showModal: true 
	  });
  }

  addNewDiagnose(newDiagnose) {
  	this.props.addNewDiagnose({
			diagnoseDate: diagnoseDate,
			diagnoseText: diagnoseText,
			diagnoseNote: diagnoseNote
		}).then(()=>{
			this.setState({ 
		    showModal: false 
		  });
		})
  }
  
  render() {
    return (
    	<Grid>    	
	    	<Row>
	      <Col sm={6} md={3}><div>Diagnoses</div></Col>
	      <Col sm={6} md={3}>
	      	<Button bsStyle="primary" bsSize="xsmall" onClick={this.open}>New</Button>
	      </Col>
	    </Row>
	    <ModalWindow 
        showModal={this.state.showModal}
      	body={<AddNewDiagnose addNewDiagnose={this.addNewDiagnose}/>}
      />
  	</Grid>
    );
  }
}

export default DiagnoseListHeader