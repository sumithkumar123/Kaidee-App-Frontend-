import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import rightScreen from '../screens/rightScreen';
import rightToAccomadate from '../screens/rightToAccomadate';

const rightStack= createNativeStackNavigator();

export default function rightStackScreen() {
  return (
    <rightStack.Navigator >
      <rightStack.Screen name="rightScreen" component={rightScreen} options={{ headerShown: false }} />
      <rightStack.Screen name="rightToAccomadate" component={rightToAccomadate} />
    </rightStack.Navigator>
  );
}