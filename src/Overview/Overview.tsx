import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Stack } from '../../App';

const { width } = Dimensions.get('window');
const BUTTON_HEIGHT = 55;

const Overview = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#4D6174' }}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E9F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.6,
    height: BUTTON_HEIGHT,
    backgroundColor: '#81A1C1',
    borderRadius: BUTTON_HEIGHT / 5,
  },
});

export default Overview;
