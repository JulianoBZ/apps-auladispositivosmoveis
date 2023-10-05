import React, {View,Text, Image } from 'react-native';

function Curriculo(){
  let nome = "Juliano Barreira Zorzetto"
  let img = 'https://s.gravatar.com/avatar/4238cae004b4e97aa0ddf9f088b23832?s=480&r=pg&d=https%3A%2F%2Fstorage.googleapis.com%2Fexpo-website-default-avatars%2Fj-2x.png';
  return(
    <View>
    <Text style={{fontSize: 30}}>{nome}</Text>
    <Text>Currículo</Text>
    <Image
      source={{ uri: img }}
      style={{ width: 300, height: 300}}
    />
    </View>
  )
}

export default Curriculo;