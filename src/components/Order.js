import React, { Component } from "react";
import Paper from "material-ui/Paper";

const style = {
  paper:{
    borderRadius: 10,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    marginTop: 20
  },

  content: {
    color:'#4D4D4D'
  }
  
};

export default class Order extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={1}>
          <h2 style={style.content}>
            {this.props.orderNumber}
          </h2>
        </Paper>
      </div>
    );
  }
}
