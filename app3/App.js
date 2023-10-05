import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';


function App(){
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)


  function multiplica(){
    if (result != (num1*num2)){
      setResult(num1*num2);
    }
  }


  return(
    <View >
    <Text>
    <TextInput placeholder='Digite X' onChangeText={setNum1}/>
    {'\n'}
    <TextInput placeholder='Digite Y' onChangeText={setNum2}/>

    {'\n'}
    <Button title='Multiplicar' onPress={multiplica}/>
    {'\n'}
    {'\n'}
    <Text>Resultado:{result}</Text>

    </Text>
    </View>
  );
}



export default App;