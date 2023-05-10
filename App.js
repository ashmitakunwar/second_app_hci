
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GaveOverScreen from "./screens/GaveOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);
  const configureNewGameHandler  = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }


  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);

  };
  const GaveOverHandler = numOfRounds => {

    setGuessRounds(numOfRounds);
    

  };
  
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGaveOver= {GaveOverHandler} />;
  } else if(guessRounds > 0) {
    content= <GaveOverScreen roundsNumber ={guessRounds} userNumber= {userNumber} onRestart={configureNewGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
