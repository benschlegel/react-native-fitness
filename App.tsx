import { registerRootComponent } from 'expo';
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Overview } from './src/Overview';
import { Onboarding } from './src/Onboarding';
import { WorkoutPlanner } from './src/WorkoutPlanner';
import type { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';

export const Stack = createNativeStackNavigator<Routes>();

export default function App(): React.ReactElement {
  // const isOnboarding = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'fade', headerShown: false }} initialRouteName={'Overview'}>
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="WorkoutPlanner" component={WorkoutPlanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
