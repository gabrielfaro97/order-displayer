import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = { 
  //margin: 12,
};

const SendRemoveButton = () => (
  <div>
    <RaisedButton
      onTouchTap={() => alert('oi')}
      label="Enviar/Remover" primary={true}
      style={style}/>
  </div>
);

export default SendRemoveButton;