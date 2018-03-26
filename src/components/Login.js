import React, { Component } from "react";
import { Link } from 'react-router-dom'

class App extends Component {

  render() {    
    return (
      <div>
          <h1>Login</h1>        
          <nav>
            <ul>
              <li><Link to='/displayer'>Entra nessa porra finalmente</Link></li>
            </ul>
          </nav>         
      </div>
    );
  }
}

export default App;
