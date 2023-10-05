import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)
  const [texto, setTexto] = useState("")

function calcula_imc(){

  setImc(peso/((altura*altura)/10000));
    if (imc < 18.5){
      setTexto("Abaixo do Peso");
      }
    else if (imc < 24.9){
      setTexto("Peso Normal");
      }
    else if (imc < 29.9){
      setTexto("Sobrepeso");
      }
    else if (imc < 34.9){
      setTexto("Obesidade");
      }
    else if (imc < 39.9){
      setTexto("Obesidade 2");
      }
    else if (imc > 39.9){
      setTexto("Obesidade 3");
      }
}

  return (
    <View>
      <Text>
        <TextInput placeholder='Digite seu peso' onChangeText={setPeso}/>
        {'\n'}
        <TextInput placeholder='Digite sua altura em centimetros' onChangeText={setAltura}/>
        {'\n'}
        <Button title='Verificar IMC' onPress={calcula_imc}/>
        {'\n'}
        <Text>Seu IMC: {imc}</Text>
        {'\n'}
        <Text>{texto}</Text>
      </Text> 
    </View>
  );
}