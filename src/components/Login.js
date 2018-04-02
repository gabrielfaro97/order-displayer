import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#E9F1FC"
  },

  title: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 22,
    fontWeight: 100,
    marginLeft: 20,
    color: "white"
  },

  genericText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 12,
    marginLeft: 20,
    fontWeight: 100,
    color: "white"
  },

  paperHeader: {
    backgroundColor: "#008df0",
    width: "100%",
    marginBottom: 50,
    height: 150
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
    height: "60%",
    width: "30%"
  },

  textField: {
    width: "85%"    
  },

  button: {
    marginTop: "10%",
    paddingBottom: 20
  }
};

class Login extends Component {
  login = () => {
    this.context.history.push("/displayer");
  };

  render() {
    return (
      <div style={styles.wrapper}>
        <Paper style={styles.paper}>
          <div style={styles.paperHeader}>
            <p style={styles.title}>Order Displayer</p>
            <p style={styles.genericText}> Autenticação </p>
          </div>
          <TextField
            hintText="Nome"          
            style={styles.textField}
            defaultValue="admin"
          />
          <br />
          <TextField
            hintText="E-mail"           
            style={styles.textField}
            defaultValue="admin"
          />
          <br />
          <TextField
            hintText="Senha"            
            style={styles.textField}
            type="password"
            defaultValue="admin"
          />
          <br />

          <Link to="/displayer" style={styles.button}>
            <RaisedButton
              backgroundColor={"#008df0"}
              labelStyle={{ color: "white" }}
              label="Login"
            />
          </Link>
        </Paper>
      </div>
    );
  }
}

export default Login;
