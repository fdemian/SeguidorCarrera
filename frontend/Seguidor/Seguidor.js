import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FetchingIndicator from '../Fetching/FetchingIndicator';
import Styles from './Seguidor.scss';
import cssModules from 'react-css-modules';
import YearOfStudy from './YearOfStudy/YearOfStudy';

const studyYears = [1,2,3,4,5];

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
  
  const { isFetching, error, materias, estados} = this.props;
    
  if(isFetching)
    return <FetchingIndicator />;

  if(error)
    return <p>Hubo un error recuperando las materias</p>;

  return(
  <div>	
	<h1 styleName="SeguidorHeading">Materias</h1>
	
	<div styleName="YearsVisualizer">
    {studyYears.map((year, i) =>		
	 <YearOfStudy 
	  key={year} 
	  subjects={materias.filter(m => m.year == year)} 
	  year={year}
	  updateEstado={this.props.updateEstado}
	 />
	)}
    </div>
	
  </div>
  )
 }
}

export default cssModules(Seguidor, Styles, { allowMultiple: true });
