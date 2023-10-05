import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image } from 'react-native';

export default function BoxVendas({img}){
  const imagem = "https://www.saopaulo.sp.gov.br/wp-content/uploads/2017/03/album-3-8.jpg";

  return(
    <View>
      <Image source = {{uri: imagem}} style={styles.box}/>
      <Text>Produto muito legal!</Text>
      <Text>R$ XYZ</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    height: 250,
    width: 100,
  }
})
  