// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Overview } from './src/Overview';
import { WorkoutPlanner } from './src/WorkoutPlanner';
import { Camera } from './src/Camera';
import type { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from ;
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Tab = createBottomTabNavigator<Routes>();

export default function App(): React.ReactElement {
  // const isOnboarding = useState(false);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Overview'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'Overview') {
              iconName = focused ? 'fitness-outline' : 'fitness';
            } else if (route.name === 'WorkoutPlanner') {
              iconName = focused ? 'reader-outline' : 'reader';
            } else if (route.name === 'Camera') {
              iconName = focused ? 'camera-outline' : 'camera';
            } else {
              //if no icon specified, default to planet
              iconName = focused ? 'planet-outline' : 'planet';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // TODO: change colors to match scheme
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Overview" component={Overview} />
        {/* <Tab.Screen name="Onboarding" component={Onboarding} /> */}
        <Tab.Screen name="WorkoutPlanner" component={WorkoutPlanner} options={{ tabBarLabel: 'Plan workout' }} />
        <Tab.Screen name="Camera" component={Camera} options={{ tabBarLabel: 'Scan QR' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
