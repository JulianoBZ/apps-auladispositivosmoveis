import { Text, SafeAreaView, StyleSheet, ScrollView, View,Image } from 'react-native';
import BoxVendas from './components/box';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App(){

  return(
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <BoxVendas/>
        <BoxVendas/>
        <BoxVendas/>
        <BoxVendas/>
        <BoxVendas/>
      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box1:{
    backgroundColor: 'red',
    height: 250,
    width: 100,
  },
  box2:{
    backgroundColor: 'green',
    height: 250,
    width: 100,
  },
  box3:{
    backgroundColor: 'yellow',
    height: 250,
    width: 100,
  },
  box4:{
    backgroundColor: 'blue',
    height: 250,
    width: 100,
  }
})

