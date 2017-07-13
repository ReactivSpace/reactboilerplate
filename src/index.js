import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes/routes.js';
import './styles/index.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();
const store =createStore(rootReducer,
composeWithDevTools(applyMiddleware(thunk)));
ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
     </Provider>
  </MuiThemeProvider>), document.getElementById('root'));
registerServiceWorker();
