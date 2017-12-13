import React, { Component } from "react";
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';

class ModalWindow extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.state = {
      showModal: this.props.showModal
    };
  }

  componentDidMount(){
    this.state = {
      showModal: this.props.showModal
    }; 
  }

  componentWillReceiveProps(nextProps){
    this.state = {
      showModal: nextProps.showModal
    }; 
  }

  close() {
    this.setState({ 
      showModal: false 
    });
  }

  open() {
    this.setState({ 
      showModal: true 
    });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          {/*
          <Modal.Header closeButton>
            <Modal.Title>Diagnoses List</Modal.Title>
          </Modal.Header>
        */}
          <Modal.Body>
            {this.props.body}  
          </Modal.Body>
          {/*
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        */}
        </Modal>
      </div>
    );
  }
}

export default ModalWindow