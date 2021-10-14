import React, { useCallback } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import type { Routes, StackNavigationProps } from '../Routes';

const { width } = Dimensions.get('window');
const BUTTON_HEIGHT = 55;

const Overview = ({ navigation }: StackNavigationProps<Routes, 'Overview'>): React.ReactElement => {
  const navigateToPlanner = useCallback(() => {
    navigation.navigate('WorkoutPlanner');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToPlanner}>
        <Text style={{ color: '#4D6174' }}>Click me!</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
