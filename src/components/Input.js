import React from 'react'
import TextField from 'material-ui/TextField'

const Input = () => (
  <div>
    <TextField
      hintText="Insira/remova uma senha. Será removida caso já exista."
      floatingLabelText="Senha:"
      floatingLabelFixed={true}
      fullWidth={true}/>
  </div>     
)

export default Input;