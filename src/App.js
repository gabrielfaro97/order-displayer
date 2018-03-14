import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Order from "./components/Order";
import { Container, Row, Col } from "react-grid-system";
import "./App.css";
import CircularProgress from "material-ui/CircularProgress";
import Paper from "material-ui/Paper";

const style = {
  borderRadius: 10,
  height: 80,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  margin: 20
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      progress: -1,
      currentValue: "",
      hasValues: false
    };
  }

  componentWillMount() {
    this.setupKey();
  }

  setupKey = event => {
    document.onkeyup = this.handlerKeyUP;
  };

  handlerKeyUP = event => {
    if (event.keyCode > 47 && event.keyCode < 58) {
      let char = String(event.keyCode - 48);
      this.setState({ currentValue: this.state.currentValue + char });
      this.setupInterval();
      this.setState({ hasValues: true });
    }
  };

  setupInterval = () => {
    clearInterval(this.interval);
    this.setState({ progress: 0 }, () => {
      this.interval = setInterval(() => {
        let currentProgress = this.state.progress;
        if (currentProgress >= 120) {
          this.addOrder();
        } else {
          this.setState({ progress: currentProgress + 4 });
        }
      }, 40);
    });
  };

  addOrder = () => {
    clearInterval(this.interval);

    let aux = false;
    let index;

    for (var i = 0; i <= this.state.values.length; i++) {
      if (this.state.currentValue === this.state.values[i]) {
        aux = true;
        index = i;
      }
    }
    if (aux === true) {
      this.state.values.splice(index, 1);
      this.setState({
        progress: -1,
        currentValue: ""
      });
      clearInterval(this.interval);
    } else {
      this.setState({
        values: this.state.values.concat(this.state.currentValue),
        progress: -1,
        currentValue: ""
      });
      clearInterval(this.interval);
    }
  };

  removerOrder = () => {};

  render() {
    return (
      <MuiThemeProvider>
        <div className="App" tabIndex={0} onKeyPress={this.handlerKeyUP}>
          <header className="App-header">
            <h1 className="App-title">Order Displayer</h1>
          </header>

          <div className="Content">
            <Paper style={style}>
              <div style={style}>
                <span
                  style={{ fontSize: 32, fontWeight: 500, paddingRight: 10 }}
                >
                  {this.state.currentValue}
                </span>
                {this.state.mounted
                  ? <span>OK</span>
                  : this.state.progress > -1 &&
                    <CircularProgress
                      size={32}
                      mode="determinate"
                      value={this.state.progress}
                    />}
              </div>
            </Paper>
            <Container>
              {this.state.hasValues
                ? <Row>
                    {this.state.values.map((item, index) =>
                      <Col key={index} xs={4} md={2}>
                        <Order orderNumber={item} />
                      </Col>
                    )}
                  </Row>
                : <div>
                    <p className="errorMessage">Digite o número do pedido.</p>
                  </div>}
            </Container>            
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
