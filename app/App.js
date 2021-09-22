import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import Fontiso from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MessageScreen';

const App = () => {
  const color = '#b5b5b5';
  const activeColor = '#F76C6B';

  const [activeScreen, setActiveScreen] = useState('HOME');
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.topNavigation}>
        <Pressable onPress={() => setActiveScreen('HOME')}>
          <Fontiso
            name="tinder"
            size={30}
            color={activeScreen === 'HOME' ? activeColor : color}
          />
        </Pressable>
        <MaterialCommunityIcon
          name="star-four-points"
          size={30}
          color={color}
        />
        <Pressable onPress={() => setActiveScreen('MESSAGE')}>
          <IoniIcons
            name="ios-chatbubbles"
            size={30}
            color={activeScreen === 'MESSAGE' ? activeColor : color}
          />
        </Pressable>
        <FontAwesome name="user" size={30} color={color} />
      </View>

      {activeScreen === 'HOME' && <HomeScreen />}
      {activeScreen === 'MESSAGE' && <MatchesScreen />}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
});
