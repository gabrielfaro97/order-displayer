import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Order from "./components/Order";
import Input from "./components/Input";
import SendRemoveButton from './components/SendRemoveButton';
import { Container, Row, Col } from "react-grid-system";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Order Displayer</h1>
          </header>

          <div className="Content">
            <Container>
              <Row>
                <Col xs={6} md={3}>
                  <Order orderNumber={"1325"} />
                </Col>
                <Col xs={6} md={3}>
                  <Order orderNumber={"1325"} />
                </Col>
                <Col xs={6} md={3}>
                  <Order orderNumber={"1325"} />
                </Col>
                <Col xs={6} md={3}>
                  <Order orderNumber={"1325"} />
                </Col>    
                <Col xs={6} md={3}>
                  <Order orderNumber={"1325"} />
                </Col>  
              </Row>
            </Container>

            <div className="Input">
              <Input />
            </div>

            <div className="Button">
              <SendRemoveButton />
            </div>
            
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
