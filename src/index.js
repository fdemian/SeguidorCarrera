import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeCreator from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Route components.
import App from './App/App'; // Main application.
import Home from './App/Home'; // Home
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
       <Router history={browserHistory} >
         <Route path="/" component={App}>
           <IndexRoute component={Home} />                      
           <Route path="*" component={NotFound} />
         </Route>
       </Router>
      </Provider>
    </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
