import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { Routes, StackNavigationProps } from '../Routes';

const Camera = ({ navigation }: StackNavigationProps<Routes, 'Overview'>): React.ReactElement => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'green' },
});

export default Camera;
