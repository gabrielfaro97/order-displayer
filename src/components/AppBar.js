import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";

const styles = {
  title: {    
    fontFamily: "sans-serif"
  },

  header: {
    backgroundColor: "#358F98",
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
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              targetOrigin={{ horizontal: "right", vertical: "top" }}
            >
              {this.props.menuItems}
            </IconMenu>
          }
        />
      </div>
    );
  }
}
