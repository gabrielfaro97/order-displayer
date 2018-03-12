import React, { Component } from 'react';
import Paper from "material-ui/Paper";

const style = {
  borderRadius: 10,
  paddingTop:'11%',
  height: 65,
  width: "85%",
  marginTop: "20%",
  marginBottom: "20%",
  marginRight: "20%",
  textAlign: "center",  
  display: "inline-block",
  backgroundColor: 'white'
};

export default class Order extends Component {

  state = { 
    orderNumber: this.props.orderNumber
  }

  render() {
    return (
      <div>
        <Paper
          style={style}
          zDepth={1}
        > 
          {this.state.orderNumber}
        </Paper>        
      </div>
    );
  }
}
