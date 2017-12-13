import React, { Component } from "react";
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button } from 'react-bootstrap';
import * as actions from './actions';
import DiagnosesList from '../../components/HomePage/DiagnosesList';
import ModalWindow from '../../components/ModalWindow';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
    this.open = this.open.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      isLoading: false,
    	showModal: false,
      diagnosesList: []
    };
  }

  closeModal() {
    this.setState({ 
      showModal: false 
    });
  }

  open() {
    this.setState({ 
      isLoading: true 
    });
  	this.props.getDiagnosesList().then((res) => {
      this.setState({ 
        showModal: true,
        isLoading: false
      });
  	});
  }

  componentWillReceiveProps(nextProps){
    this.setState({ 
      diagnosesList: nextProps.diagnosesList,
    });
  }

  render() {
    let isLoading = this.state.isLoading;
    return (
    	<div>
        <Button
          bsStyle="primary"
          bsSize="large"
          disabled={isLoading}
          onClick={!isLoading ? this.open : null}
        >
          {isLoading ? 'Fetching Diagnoses List...' : 'Diagnoses List'}
        </Button>

        <ModalWindow 
          showModal={this.state.showModal}
          body={<DiagnosesList list={this.state.diagnosesList} addNewDiagnose={this.props.addNewDiagnose} closeModal={this.closeModal}/>}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    diagnosesList: state.toJS().diagnosesList.diagnosesList
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	getDiagnosesList: () =>{
  		return dispatch(actions.getDiagnosesList());
  	},
    addNewDiagnose: (data) => {
      return dispatch(actions.addNewDiagnose(data));
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
