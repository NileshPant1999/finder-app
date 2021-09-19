import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import Card from './src/components/FinderCard';
import users from './assets/data/users';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const jeff = {
  name: 'Jeff Bezos',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
  bio: 'A dude with gal with fuel CEO, entrepreneur born in 1964, Jeffrey Bezos',
};

const ROTATION = 60;

const App = () => {
  const {width: screenWidth} = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      'deg',
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: () => {
      console.log('sifei');
    },
  });

  return (
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <Card user={users[2]} />
        </Animated.View>
      </PanGestureHandler>
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
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
