import { Text, SafeAreaView, StyleSheet,ScrollView, Vie } from 'react-native';
import BoxVendas from './components/box';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <ScrollView>
      <BoxVendas texto='T'/>
      <BoxVendas texto='A'/>
      <BoxVendas texto='P'/>
      <BoxVendas texto='O'/>
      <BoxVendas texto='R'/>
      <BoxVendas texto='R'/>
      <BoxVendas texto='A'/>
      <BoxVendas texto='F'/>
      <BoxVendas texto='I'/>
      <BoxVendas texto='O'/>
      <BoxVendas texto='T'/>
      <BoxVendas texto='E'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
