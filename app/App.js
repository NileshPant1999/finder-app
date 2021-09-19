import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import Card from './src/components/FinderCard';
import users from './assets/data/users';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const jeff = {
  name: 'Jeff Bezos',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
  bio: 'A dude with gal with fuel CEO, entrepreneur born in 1964, Jeffrey Bezos',
};

const App = () => {
  const sharedValue = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: sharedValue.value * 100,
      },
    ],
  }));

  return (
    <View style={styles.pageContainer}>
      <Animated.View style={[styles.animatedCard, cardStyle]}>
        <Card user={users[2]} />
      </Animated.View>
      <Pressable onPress={() => (sharedValue.value = Math.random())}>
        <Text>Change value</Text>
      </Pressable>
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
  animatedCard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
