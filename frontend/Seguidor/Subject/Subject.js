import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Styles from './Subject.scss';
import cssModules from 'react-css-modules';

function getValueStatus(value)
{
   let status = "";

   switch (value)
   {
      case 1:
        status = "Pending";
        break;
      case 2:
        status = "Taking";
        break;
      case 3:
        status = "PartiallyFinished"; // Firmada
        break;
      case 4:
        status = "Passed";
        break;
      default:
        status = "";
   }

   return status;
}

class Subject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: this.props.status, id: this.props.id};
	this.updateMateria = this.updateMateria.bind(this);
	this.updateStatusFn = this.props.updateEstado;
  }

  updateMateria(){	  	
	  const materiaStatus = {"id": parseInt(this.state.id), "status": this.state.value};
	  this.updateStatusFn(materiaStatus);
  }
  
  handleChange = (event, index, value) => {	  
	  this.setState({value}, this.updateMateria);
  };

  render() {
   
   const cursadaClass = this.props.cursada ? " Enabled" : " Disabled";
   const cssClass = "Subject " + getValueStatus(this.state.value) + cursadaClass;
      
   return (
   <div styleName={cssClass}>
     
	 <div>{this.props.name}</div>
		
	 <DropDownMenu 
		value={this.state.value} 
		disabled={!this.props.cursada}
	    onChange={this.handleChange}
	 >
		<MenuItem value={1} primaryText="Pendiente" />
		<MenuItem value={2} primaryText="Cursando" />
		<MenuItem value={3} primaryText="Firmada" />
		<MenuItem value={4} primaryText="Aprobada" />
	 </DropDownMenu>
	 
   </div>
   );
   
  }
}

export default cssModules(Subject, Styles, { allowMultiple: true });
