import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import mainScreen from './screens/HomeScreen';
import LoginStackScreen from './routes/loginStack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginStackScreen">
      <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="mainScreen" component={mainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}