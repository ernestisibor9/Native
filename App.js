import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

  const[dice1, setDice1] = useState("1")
  const[dice2, setDice2] = useState("4")



  const myImage = {
    "1" :  require("./assets/dice/dice1.png"),
    "2" :  require("./assets/dice/dice2.png"),
    "3" :  require("./assets/dice/dice3.png"),
    "4" :  require("./assets/dice/dice4.png"),
    "5" :  require("./assets/dice/dice5.jpg"),
    "6" :  require("./assets/dice/dice6.png"),
  }

  function rollDice(){
    const diceOne = Math.floor(Math.random() * 6 + 1)
    const diceTwo = Math.floor(Math.random() * 6 + 1)

    setDice1(diceOne);
    setDice2(diceTwo);

  }
  return (
    <View style={styles.container}>
      <View style = {{flexDirection:'row',}}>
        <FontAwesome name="envelope-o" size={34} color="black" />
        <FontAwesome5 name="dice-five" size={34} color="black" />
      </View>
      <Text style = {styles.ernest}>Created by Isibor Ernest</Text>
      <View style = {styles.messageCon}>
        {dice1 == dice2 ? <Text style = {styles.congratulations}>Congratulations you won!</Text> : <Text style = {styles.tryAgain}>Try again</Text>}
      </View>
    
      <View style = {styles.diceMan}>
        <Image 
          source = {
           myImage[dice1]
          }
          style = {{
            width: 100,
            height: 100,
          }}
        />
          <Image 
          source = {
            myImage[dice2]
          }
          style = {{
            width: 100,
            height: 100,
          }}
          />
      </View>

        <TouchableOpacity style = {styles.btnPry}
        onPress={rollDice}>
          <Text style = {styles.text}>ROLL THE DICE</Text>
        </TouchableOpacity>
      
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
  btnPry:{
    backgroundColor:'blue',
    paddingVertical: 10,
    paddingHorizontal:20,
    marginTop: 20,
    borderRadius: 15,
  },
  text:{
    color: '#fff',
    fontSize: 20,
  },
  diceMan:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  congratulations:{
    fontSize:25,
    color:'green',
  },
  tryAgain:{
    fontSize:25,
    color:'red',
  },
  messageCon:{
    marginBottom:50,
  },
  ernest:{
    marginBottom:50,
    color:'green',
    fontSize:15,
  }
});
