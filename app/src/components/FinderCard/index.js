import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

const index = props => {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 10,
  },
  bio: {
    color: 'white',
    fontSize: 18,
    lineHeight: 25,
    marginHorizontal: 10,
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  cardInner: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
});
