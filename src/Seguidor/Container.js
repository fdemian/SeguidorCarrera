import React from 'react';
import { connect } from 'react-redux';
import Seguidor from './Seguidor';
import loadMaterias from './Actions';

const mapStateToProps = (state) => {
  return {
    materias: state.seguidor.materias,
	  isFetching: state.seguidor.isFetching,
	  error: state.seguidor.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(loadMaterias());
    }
  }
}

const SeguidorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Seguidor)

export default SeguidorContainer;
