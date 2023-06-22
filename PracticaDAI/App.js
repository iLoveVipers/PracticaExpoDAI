import { StatusBar } from 'expo-status-bar';
import ImageLogo from './assets/imgs/central_perk_logo.jpeg'
import Card from "./Card";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={ImageLogo} style={styles.img}/>
      <Card style={styles.card}></Card>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:1080,
    height:416
  },
  card:{
    width: 300,
    height: 400  
  }
});
