// import { registerRootComponent } from 'expo';
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Overview } from './Overview';
import { Onboarding } from './Onboarding';
import type { Routes } from './Routes';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<Routes>();

export default function App(): React.ReactElement {
  // const isOnboarding = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'fade', headerShown: false }} initialRouteName={'Overview'}>
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
