import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton' ;

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    alignSelf: 'flex-end'
  }
}

class Input extends Component {
  contructor(props){
    super(props);
    this.state = {
      code = ''
    }
  }

  render() {
    return (
      <div style={styles.content}>
      <TextField
        hintText="Insira/remova uma senha. Será removida caso já exista."
        floatingLabelText="Senha:"
        floatingLabelFixed={true}
        fullWidth={true}
        onChange={(event, newValue) => this.setState({code:newValue})}/>
      
      <RaisedButton 
        onTouchTap={(event)=>this.handleClick(event)}
        label="Enviar/Remover" primary={true}
        style={{alignSelf: 'flex-end'}}/>         
  
    </div>
    )
  }

}

export default Input;