import React, { Component, PropTypes } from 'react';
import {loadEstado, loadMaterias} from './Actions';
import { Chart } from 'react-google-charts';
import Subject from './Subject/Subject';
import FetchingIndicator from '../Fetching/FetchingIndicator';

 
class EstadoCarrera extends Component {
  constructor(props) {
    super(props);
    this.state = {
		'aprobadas': 23, 
		'firmadas': 2,
		'cursando': 10,
		'pendientes': 13,
		options: {
			width: '100%',
			height: 100,
			chartArea: {width: '90%', height: '15%'},
			hAxis: {
				minValue: 0
			},
			vAxis: {
				textPosition: 'none'
			},
			bar: { groupWidth: '100%' },
			legend: {position: 'none'},
			isStacked: 'percent',
			series: {
				0:{color:'green'},
				1:{color:'yellow'},
				2:{color:'#9ecaed'},
				3:{color:'silver'}
			}
		},
		data: ''
    };
  }

  render() {
	if (this.props.subjects.length > 0) {
		this.state.pendientes = this.props.subjects.filter(s => s.status == 1).length;
		this.state.cursando = this.props.subjects.filter(s => s.status == 2).length;
		this.state.firmadas = this.props.subjects.filter(s => s.status == 3).length;
		this.state.aprobadas = this.props.subjects.filter(s => s.status == 4).length;
		this.state.data = [
				['Elemento', 'Aprobadas','Firmadas','Cursando','Pendientes'],
				['Materias', this.state.aprobadas, this.state.firmadas, this.state.cursando, this.state.pendientes]
			];
		return (
		<div>
		  <Chart
			chartType="BarChart"
			data={this.state.data}
			options={this.state.options}
			graph_id="GraficoEstadoCarrera"
			width="100%"
			height="100px"
			legend_toggle
		  />
		</div>
		);
	} else {
		return <FetchingIndicator />;
	}
  }
}

export default EstadoCarrera;
