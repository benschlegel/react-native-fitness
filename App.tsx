import { registerRootComponent } from 'expo';
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Overview } from './src/Overview';
import { Onboarding } from './src/Onboarding';
import { WorkoutPlanner } from './src/WorkoutPlanner';
import type { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const Tab = createBottomTabNavigator<Routes>();

export default function App(): React.ReactElement {
  // const isOnboarding = useState(false);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Overview'}>
        <Tab.Screen name="Overview" component={Overview} />
        <Tab.Screen name="Onboarding" component={Onboarding} />
        <Tab.Screen name="WorkoutPlanner" component={WorkoutPlanner} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
