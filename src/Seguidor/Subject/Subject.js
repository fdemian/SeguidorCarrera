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
        status = "PartiallyFinished";
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
    this.state = {value: this.props.status};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

   const cssClass = "Subject " + getValueStatus(this.state.value);

   return (
	 <div styleName={cssClass}>
	  <span>{this.props.name}</span>
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
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
