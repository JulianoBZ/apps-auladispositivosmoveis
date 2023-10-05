import React, { Text, View, Image, Component } from 'react-native';
import {Formacao} from './formacao/index';
import Curriculo from './curriculo/index';


function App(){
  return(
    <View>
        <Curriculo />
        <Formacao />
    </View>
  )
}


export default App;