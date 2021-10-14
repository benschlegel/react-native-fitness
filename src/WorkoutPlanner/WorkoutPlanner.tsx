import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import type { Routes, StackNavigationProps } from '../Routes';

const WorkoutPlanner = ({ navigation }: StackNavigationProps<Routes, 'Overview'>): React.ReactElement => {
  const navigateToPlanner = useCallback(() => {
    navigation.navigate('WorkoutPlanner');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'yellow' },
});

export default WorkoutPlanner;
