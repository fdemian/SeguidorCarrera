import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeCreator from './store/configureStore';

// Route components.
import App from './App/App'; // Main application.
import NotFound from './Errors/NotFound'; // 404

import injectTapEventPlugin from 'react-tap-event-plugin';

const store = storeCreator();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Root extends React.Component {

 render() {

   return (
   <div>
	 <Provider store={store}>
      <App />
	 </ Provider>
   </div>
   );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
