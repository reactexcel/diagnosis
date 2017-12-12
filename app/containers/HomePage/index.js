/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Popover,Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';
import * as actions from './actions';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.state = {
    	showModal: false
    };
  }

  close() {
    this.setState({ 
    	showModal: false 
    });
  }

  open() {
  	this.props.getDiagnosesList().then((res) => {
  		console.log('----res')
  		console.log(res)
  	});
    this.setState({ showModal: true });
  }

	componentDidMount(){
		//this.props.getDiagnosesList();
	}

  render() {

  	console.log('******')
  	console.log( this.props )

    return (
    	<div>
      	<div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Diagnoses List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  // makeSelectLocale(),
  (locale) => ({ locale })
);

function mapDispatchToProps(dispatch) {
  return {
  	getDiagnosesList: () =>{
  		return dispatch(actions.getDiagnosesList());
  	},
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
