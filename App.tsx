/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import React from 'react';
import {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './components/styles';

const App = () => {
  const [board, setBoard] = {
    [
      ['', '', '']
      ['', '', '']
      ['', '', '']
    ]
  };
  const 
};
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <TouchableOpacity  style={styles.one}>
            <Text>  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.two}>
            <Text>  </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.three}>
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxTwo}>
          <TouchableOpacity style={styles.four}>
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.five}>
            <Text>  </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.six}>
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxThree}>
          <TouchableOpacity  style={styles.seven}>
            <Text>  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eight}>
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.nine}>
            <Text> </Text>
          </TouchableOpacity>
        </View>
        {/* //display winner ans whose turn */}
        <View>
          {/* <View>{<Text>{!winner && displayTurn()}</Text>}</View> */}
          {/* {winner && <Text>{displayWinner()}</Text>} */}

            <TouchableOpacity style={styles.gameButton}>
              <Text>Play Again</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

 