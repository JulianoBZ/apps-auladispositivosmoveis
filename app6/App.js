import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function App() {
  const [value, setValue] = useState(0)
  const [revolver, setRevolver] = useState(0)
  const [texto, setTexto] = useState("")

function descobrir(){
  setRevolver(Math.floor(Math.random()*6))
  if (parseInt(value) == parseInt(revolver)){
    setTexto("Você morreu");
  }else{
    setTexto("Você Sobreviveu");
  }
}

  return (
    <View>
      <Text>
        Roleta Russa:
        {'\n'}
        {'\n'}
        <TextInput placeholder='Escolha um número'onChangeText={setValue}/>
        {'\n'}
        <Button title='Descobrir' onPress={descobrir}/>
        {'\n'}
        <Text>{texto}   -{revolver}-{value}</Text>
      </Text> 
    </View>
  );
}
