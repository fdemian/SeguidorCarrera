import React, { Component, PropTypes } from 'react';
import {loadEstado, loadMaterias} from './Actions';
import { Chart } from 'react-google-charts';
import Subject from './Subject/Subject';

 
class EstadoCarrera extends Component {
  constructor(props) {
    super(props);
	console.log(this.props);
	console.log(this.props.subjects);
	console.log("prueba datos");
    this.state = {
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
				1:{color:'red'},
				2:{color:'gold'},
				3:{color:'silver'}
			}
		},
		data: [
			['Elemento', 'Aprobadas','Firmadas','Cursando','Pendientes'],
			['Materias', 17, 3, 10, 13]
		],
    };
  }

  render() {
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
  }
}

export default EstadoCarrera;
