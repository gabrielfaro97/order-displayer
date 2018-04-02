import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

const styles = {
  title: {    
    fontFamily: "sans-serif"
  },

  header: {
    backgroundColor: "#008df0",
    fontFamily: "sans-serif"
  },  
};

export default class AppBarComponent extends Component {
  render() {
    return (
      <div>
        <AppBar
          style={styles.header}
          title={<span style={styles.title}>Order Displayer</span>}
          iconElementLeft={<span />}          
        />
      </div>
    );
  }
}
