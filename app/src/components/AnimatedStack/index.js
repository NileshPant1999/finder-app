import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Like from '../../../assets/images/LIKE.png';
import Nope from '../../../assets/images/nope.png';

const ROTATION = 60;
const TRANSLATION_X = 130;

const AnimatedStack = props => {
  const {data, renderItems, onSwipeRight, onSwipeLeft} = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex];

  const {width: screenWidth} = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      'deg',
  );

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 3], [0, 1]),
  }));

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 3], [0, 1]),
  }));

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

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.9, 1],
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.8, 1],
    ),
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: event => {
      if (Math.abs(event.translationX) < TRANSLATION_X) {
        translateX.value = withSpring(0);
        return;
      }
      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.translationX),
        {},
        runOnJS(setCurrentIndex)(currentIndex + 1),
      );
      const onSwipe = event.translationX > 0 ? onSwipeRight : onSwipeLeft;
      runOnJS(onSwipe)(currentProfile);
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);

  return (
    <View style={styles.root}>
      {nextProfile && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            {renderItems({item: nextProfile})}
          </Animated.View>
        </View>
      )}

      {currentProfile ? (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Animated.Image
              source={Like}
              style={[styles.like, {left: 10}, likeStyle]}
              resizeMode={'contain'}
            />
            <Animated.Image
              source={Nope}
              style={[styles.like, {right: 10}, nopeStyle]}
              resizeMode={'contain'}
            />
            {renderItems({item: currentProfile})}
          </Animated.View>
        </PanGestureHandler>
      ) : (
        <Text>No New Profiles Found</Text>
      )}
    </View>
  );
};

export default AnimatedStack;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  animatedCard: {
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 10,
    zIndex: 1,
  },
});
