import React, { Component } from "react";
import Paper from "material-ui/Paper";

const style = {
  borderRadius: 10,
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  padding: 20,
  margin: 10
};

export default class Order extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1}>
          <h2>
            {this.props.orderNumber}
          </h2>
        </Paper>
      </div>
    );
  }
}
