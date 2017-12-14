import React, { Component } from "react";
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
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
		this.closeAddNewModal = this.closeAddNewModal.bind(this);
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
		})
			this.setState({
		    showModal: false
		  });
  }
	closeAddNewModal() {
		this.setState({
			showModal: false
		});
	}

  render() {
    return (
      <div>
	    	<Row className="diagnose-list-header">
	      <Col sm={3} md={6} className="header-text">
          <div>Diagnoses</div>
        </Col>
	      <Col sm={3} md={6} className="text-right">
          <Button bsStyle="link" onClick={this.open} className="add-new-link">Add new <Glyphicon className="icon-style" glyph="plus-sign" /></Button>
	      </Col>
	    </Row>

	    <ModalWindow
        showModal={this.state.showModal}
      	body={<AddNewDiagnose addNewDiagnose={this.addNewDiagnose} closeAddNewModal={this.closeAddNewModal} />}
      />

      </div>

    );
  }
}

export default DiagnoseListHeader
