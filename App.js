import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [weight,setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [Ind,setInd] =useState('');

  function calcIndex(){
    let res = weight/(height*height);
    setInd(res);
    setWeight("")
    setHeight("")
  }

  return (
    <View style={styles.container}>
      <view style = {styles.header}>
      <Text  style = {styles.head}>Testtömegindex számítás</Text>
      </view>
      <view style = {styles.body}>

      <Text style={styles.label}>testtömeg (kg)</Text>
      <TextInput style ={styles.input}
      onChangeText={text =>setWeight(text)}
      />

      <Text>testmagasság (méter)</Text>
      <TextInput style ={styles.input}
      onChangeText={text =>setHeight(text)}
      />

      <Pressable onPress={calcIndex} style={styles.button}>
        <Text style={styles.buttonText}>Számít</Text>
      </Pressable>

      <Text>Testtömegindex</Text>
      <TextInput
      style ={styles.input}
      value={Ind}
      />

      <StatusBar style="auto" />
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'grey',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 3,
    margin: 10,
    alignItems: 'center',
  },
  head: {
    fontSize: 30,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 3,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'white',
    height: 30,
    width:'30%',
    fontSize: 18,
    paddingHorizontal: 8,
  },
  
});
