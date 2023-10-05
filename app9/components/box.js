import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image } from 'react-native';

export default function BoxVendas(props){

  return(
    <View style={styles.box}>
      <Text style={styles.text}>{props.texto}</Text>
      <Text style={styles.text}>Descrição</Text>
      <Text style={styles.text}>Contato</Text>
      <Text style={styles.text}>R$ XYZ</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    height: 110,
    width: 300,
    alignSelf: 'center',
    borderWidth: 5,
  },
  text:{
    alignSelf: 'center',
  }
})