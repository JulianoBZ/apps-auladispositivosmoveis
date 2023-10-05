import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [result, setResult] = useState(0)
  const [value, setValue] = useState("Teste")

function compensa_mais(){
  setResult(gasolina/alcool);
  if (result > 0.7){
    setValue("Álcool Compensa Mais!");
  }else{
    setValue("Gasolina Compensa Mais!");
  }
}

  return (
    <View>
      <Text>
        <TextInput placeholder='Preço do álcool'onChangeText={setAlcool}/>
        <TextInput placeholder='Preço da gasolina'onChangeText={setGasolina}/>
        {'\n'}
        <Button title='Verificar' onPress={compensa_mais}/>
        {'\n'}
        <Text>Resultado: {result}</Text>
        {'\n'}
        
        <Text>{value}</Text>
      </Text> 
    </View>
  );
}
