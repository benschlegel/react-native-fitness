import React, { useCallback } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Routes, StackNavigationProps } from '../Routes';

const { width } = Dimensions.get('window');
const BUTTON_HEIGHT = 55;

const WorkoutPlanner = ({ navigation }: StackNavigationProps<Routes, 'Overview'>): React.ReactElement => {
  const navigateToPlanner = useCallback(() => {
    navigation.navigate('Overview');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToPlanner}>
        <Text>Go back...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D08770',
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

export default WorkoutPlanner;
