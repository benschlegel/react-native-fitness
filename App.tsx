import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function App(): React.ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>

        <Text>test</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    backgroundColor: 'rgba(251, 111, 140, 0.8)',
    width: width,
    height: height * 0.62,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  }
});
