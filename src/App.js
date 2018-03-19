import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Order from "./components/Order";
import { Container, Row, Col } from "react-grid-system";
import "./styles/App.css";
import CircularProgress from "material-ui/CircularProgress";
import Paper from "material-ui/Paper";
import Snackbar from "material-ui/Snackbar";
import AppBarComponent from "./components/AppBarComponent";
import MenuItem from "material-ui/MenuItem";
import Toggle from "material-ui/Toggle";

const style = {
  borderRadius: 10,
  height: 80,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  marginTop: 20,
  color: "#4D4D4D"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      progress: -1,
      currentValue: "",
      hasValues: false,
      openSnack: false,
      removedOrder: null,
      autoSend: true,      
    };
  }

  componentWillMount() {
    this.setupKey();
  }

  hasValues = () => {
    console.log('consultou se há valores')
    if (this.state.values.length < 1) {
      this.setState({ hasValues: false });
    }
  };

  openSnack = () => {
    console.log('abriu o snack')
    this.setState({
      openSnack: true
    });
  };

  closeSnack = () => {
    console.log('fechou o snack')
    this.setState({
      openSnack: false
    });
  };

  setupKey = event => {    
    console.log('primeira função')
    document.onkeyup = this.handlerKeyUP;
  };

  handlerKeyUP = event => {
    console.clear();
    console.log('segunda função')
    if (event.keyCode > 47 && event.keyCode < 58) {
      let char = String(event.keyCode - 48);
      this.setState({ currentValue: this.state.currentValue + char });
      this.setupInterval();
      this.setState({ hasValues: true });
    }
  };

  setupInterval = () => {
    console.log('terceira função')
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
    console.log('quarta função')
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
      this.setState({
        removedOrder: this.state.values[index],
        progress: -1,
        currentValue: ""
      });
      this.state.values.splice(index, 1);
      this.openSnack();
      clearInterval(this.interval);
    } else {
      this.setState({
        values: this.state.values.concat(this.state.currentValue),
        progress: -1,
        currentValue: ""
      });
      clearInterval(this.interval);
    }

    this.hasValues();    
  };

  render() {    
    return (
      <MuiThemeProvider>
        <div className="App" tabIndex={0} onKeyPress={this.handlerKeyUP}>
          <AppBarComponent
            menuItems={
              <div>
                <MenuItem primaryText="Ajuda" />
                <MenuItem>               
                <Toggle
                    defaultToggled={true}
                    label="Enviar pedido automaticamente"
                    style={{paddingTop: 13}}
                    onToggle={() => this.setState({autoSend:!this.state.autoSend})}
                  />
                </MenuItem>
              </div>
            }
          />

          <div className="Content">
            <Paper>
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
            <Snackbar
              bodyStyle={{ backgroundColor: "rgba(181, 50 ,57 , 0.9)" }}
              open={this.state.openSnack}
              message={
                "Pedido número: " + this.state.removedOrder + " removido"
              }
              autoHideDuration={2500}
              onRequestClose={this.handleRequestClose}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
