import {Button, Text, View} from 'react-native';




export function Botao_plus(){
  function Somar(){
  setValue(value +1);
}
  return(
    <Button title = "+" onPress={Somar} />
  )
}

export function Botao_minus(){
  function Subtrair(){
  if (value > 0){
  setValue(value -1);
  }
}
  return(
    <Button title = "-" onPress={Subtrair} />
  )
}