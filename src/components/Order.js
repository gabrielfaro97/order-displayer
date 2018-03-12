import React, { Component } from 'react';
import Paper from "material-ui/Paper";

const style = {
  height: 100,
  width: 300,
  marginTop: 20,
  marginBottom: 20,
  marginRight: 27,
  textAlign: "center",  
  display: "inline-block",
};

export default class Order extends Component {
  render() {
    return (
      <div>
        <Paper style={style}> {this.props.orderNumber} </Paper>        
      </div>
    );
  }
}
