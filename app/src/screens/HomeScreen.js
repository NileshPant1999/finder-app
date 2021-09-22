import React from 'react';
import {StyleSheet, View} from 'react-native';
import users from '../../assets/data/users';
import AnimatedStack from '../components/AnimatedStack';
import Card from '../components/FinderCard';

const HomeScreen = () => {
  const onSwipeLeft = user => {
    console.warn('Swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('Swipe right', user.name);
  };
  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItems={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
