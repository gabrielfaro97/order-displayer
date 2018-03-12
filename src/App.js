import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Order from "./components/Order";
import Input from "./components/Input";
import { Container, Row, Col } from "react-grid-system";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["123", "1231", "12312", "4234", "1123", "125", "589", "589"]
    };
  }

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
                {this.state.values.map((item, index) =>
                  <Col key={index} xs={6} md={3}>
                    <Order orderNumber={item} />
                  </Col>
                )}
              </Row>
            </Container>
            <Input />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
