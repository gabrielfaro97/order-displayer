import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from "react-tap-event-plugin";
import './styles/index.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

injectTapEventPlugin();

render((
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>  
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();

