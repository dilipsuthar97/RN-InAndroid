import React from 'react';
import {AppRegistry, StatusBar, StyleSheet, Text, View} from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'blue'} />
      <View
        style={styles.header}
      >
        <Text style={styles.headerText}>Custom Header</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome to ReactNative</Text>
      </View>
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
    height: 54,
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  headerText: {
    color: 'white',
    fontSize: 18
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld,
);