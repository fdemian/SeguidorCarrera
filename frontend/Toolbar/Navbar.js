import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Styles from './css/Toolbar.scss';
import { Link } from 'react-router';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
//import TextField from 'material-ui/TextField';
import BannerImage from './BannerImage';

const bannerImgSource = "http://www.utnianos.com.ar/foro/images/isologo_utnianos_small_3.png";

const toolbarStyles = {
 'backgroundColor': 'white',
 'position': 'fixed',
 'top': '0px',
 'boxSizing': 'border-box',
 'width':'100%',
 'border':'1px solid gainsboro',
 'height':'56px',
 'zIndex':'1024'
}

const Navbar = ({ loggedIn, user, notifications }) => {

 return(
  <Toolbar style={toolbarStyles}>
    <ToolbarGroup >
      <Link to="/">
	   <BannerImage source={bannerImgSource} />
      </Link>
    </ToolbarGroup>
  </Toolbar>
  );

}

export default cssModules(Navbar, Styles, { allowMultiple: true });
