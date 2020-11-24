import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [number, setNumber] = useState(0);
  const uri = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

  const rollDice = () => {
    console.log();
    setNumber(Math.floor(Math.random() * 6));
  };

  return (
    <>
      <StatusBar backgroundColor="#222831" />
      <View style={styles.container}>
        <TouchableOpacity onPress={rollDice}>
          <Image source={uri[number]} />
          {/* <Text style={styles.text}>Play Game</Text> */}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  text: {
    backgroundColor: '#BB2CD9',
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    color: '#ffffff',
    fontSize: 20,
  },
});
