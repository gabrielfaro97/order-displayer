import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Order from './components/Order'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Order Displayer</h1>
          </header>

          <div className="Orders">       
            <Order orderNumber={'1325'}/>
            <Order orderNumber={'1325'}/>
            <Order orderNumber={'1325'}/>            
          </div>    

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
