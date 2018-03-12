import React from 'react'
import TextField from 'material-ui/TextField'
import SendRemoveButton from './SendRemoveButton';

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    alignSelf: 'flex-end'
  }
}

const Input = () => (
  <div style={styles.content}>
    <TextField
      hintText="Insira/remova uma senha. Será removida caso já exista."
      floatingLabelText="Senha:"
      floatingLabelFixed={true}
      fullWidth={true}/>
    
    <SendRemoveButton style={{alignSelf: 'flex-end'}} />         

  </div>
)

export default Input;