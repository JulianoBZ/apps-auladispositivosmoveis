import { Text, SafeAreaView, StyleSheet, ScrollView, View,TextInput, Button,Switch } from 'react-native';
import React, { Component, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function App() {
  const[nome, setNome] = useState("")
  const[idade, setIdade] = useState(0)
  const[sexo, setSexo] = useState("M")
  const[escolaridade, setEscolaridade] = useState("Ensino Fundamental")
  const[limite, setLimite] = useState(0)
  const[brasileiro, setBrasil] = useState("Não")
  const[display, setDisplay] = useState('none')
  const[cadastrado, setCadastrado] = useState(false)

  function cadastrar(){
    setCadastrado(true);
  }

  return (
    <View>
      <Text>
        <TextInput placeholder = "Digite seu Nome" onChangeText={setNome}/>
        {'\n'}
        <TextInput placeholder = "Digite sua Idade" onChangeText={setIdade}/>
        {'\n'}
        <Text> Sexo: </Text>
        <Picker selectedValue={sexo} onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }>
          <Picker.Item key={1} value={"M"} label="Masculino" />
          <Picker.Item key={2} value={"F"} label="Feminino" />
        </Picker>
        {'\n'}
        <Text> Escolaridade: </Text>
        <Picker selectedValue={escolaridade} onValueChange={ (itemValue, itemIndex) => setEscolaridade(itemValue) }>
          <Picker.Item key={1} value={"Ensino Fundamental"} label="Fundamental" />
          <Picker.Item key={2} value={"Ensino Médio"} label="Médio" />
          <Picker.Item key={3} value={"Ensino Técnico"} label="Técnico" />
          <Picker.Item key={4} value={"Faculdade"} label="Superior" />
          <Picker.Item key={5} value={"Mestrado"} label="Mestrado" />
        </Picker>
        {'\n'}
        <Text>Limite da Conta: </Text>
        <Slider style={styles.container}
          minimumValue={0}
          maximumValue={100}
          step={1}
          onValueChange={(valorSelecionado) => setLimite(valorSelecionado) }
          value={limite}
          />
      {'\n'}
      Brasileiro?: 
      <Switch
      value={brasileiro}
      onValueChange={ (valorSwitch) => setBrasil(valorSwitch) }
      />{(brasileiro) ? "Sim" : "Não"}
      {'\n'}{'\n'}
      <Button title='Cadastrar' onPress={cadastrar}/>

      {'\n'}{'\n'}{'\n'}
      {cadastrado&&(
        <View>
          <Text>
            Nome: {nome}{'\n'}
            Idade: {idade}{'\n'}
            Sexo: {sexo}{'\n'}
            Escolaridade: {escolaridade}{'\n'}
            Limite da conta: {limite}{'\n'}
            Brasileiro?: {(brasileiro) ? "Sim" : "Não"}{'\n'}
          </Text> 
          </View>
      )
      }
      </Text>
      </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 15,
    width: 200,
  },
  show:{display:'none'}
});

