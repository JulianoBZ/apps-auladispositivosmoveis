import React, {useState} from 'react';
import {Text, View, Component,Button} from 'react-native';
import {Botao_plus, Botao_minus} from './botao/botao';
import Exibir from './botao/exibir';




function App(){
  const [value, setValue] = useState(0);

  function Somar(){
  setValue(value +1);
}
function Subtrair(){
  if (value > 0){
  setValue(value -1);
  }
}
  return(
    <View>
    <Text>
    </Text>  
      <Button title = "+" onPress={Somar} />
      <Button title = "-" onPress={Subtrair} />
      {value}

    </View>
  )
}

export default App;