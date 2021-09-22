import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MessageScreen';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
