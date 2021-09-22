import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

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
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={35} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={35} color="#F76C6B" />
        </View>

        <View style={styles.button}>
          <FontAwesome name="star" size={35} color="#3AB4CC" />
        </View>

        <View style={styles.button}>
          <FontAwesome name="heart" size={35} color="#4FCC94" />
        </View>

        <View style={styles.button}>
          <Ionicons name="flash" size={35} color="#A65CD2" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  icons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
});
