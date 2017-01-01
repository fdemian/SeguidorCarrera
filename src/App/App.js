import React from 'react';
import cssModules from 'react-css-modules';
import Navbar from '../Toolbar/NavbarContainer';
import Footer from './Footer';
import Styles from './Base.scss';
import Seguidor from '../Seguidor/Container';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
	<div styleName="App">
      <Navbar />
      <div styleName="MainApp" >
        <Seguidor />
      </div>
      <Footer />
	</div>
  </ MuiThemeProvider>
);

export default cssModules(App, Styles, { allowMultiple: true });
