import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FetchingIndicator from '../Fetching/FetchingIndicator';
import Styles from './Seguidor.scss';
import cssModules from 'react-css-modules';
import YearOfStudy from './YearOfStudy/YearOfStudy';

class Seguidor extends Component {

 constructor(props)
 {
    super(props)
 }

 componentDidMount()
 {
   this.props.onLoad();
 }

 render() {

  const { isFetching, error, materias} = this.props;

  if(isFetching)
    return <FetchingIndicator />;

  if(error)
    return <p>Hubo un error recuperando las materias</p>;

  return(
  <div>
      <h1 styleName="SeguidorHeading">Materias</h1>
      <div styleName="YearsVisualizer">
      {materias.map((year, i) =>
      <YearOfStudy key={i} subjects={year.subjects} year={year.number} />
      )}
     </div>
  </div>
  )
 }
}

export default cssModules(Seguidor, Styles, { allowMultiple: true });
