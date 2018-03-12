import React, { Component } from 'react';
import Paper from "material-ui/Paper";

const style = {

  height: "100%",
  width: "85%",
  marginTop: "20%",
  marginBottom: "20%",
  marginRight: "20%",
  textAlign: "center",  
  display: "inline-block",
};

export default class Order extends Component {
  render() {
    return (
      <div>
        <Paper s
          style={style}
          zDepth={1}

        > 
          {this.props.orderNumber}
        </Paper>        
      </div>
    );
  }
}
