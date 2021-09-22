import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import users from '../../assets/data/users';

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}>Potential Candidates</Text>
        <View style={styles.users}>
          {users.map(user => (
            <View style={styles.user} key={user.id}>
              <Image source={{uri: user.image}} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    padding: 3,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#F63A6E',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F63A6E',
  },
});
