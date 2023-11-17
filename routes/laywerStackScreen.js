import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import lawyersinfo from '../information/lawyersinfo';
import laywerOne from '../information/laywerOne';
const laywerStack= createNativeStackNavigator();

export default function laywerStackScreen() {
  return (
    <laywerStack.Navigator >
      <laywerStack.Screen name="lawyersinfo" component={lawyersinfo} options={{ headerShown: false }} />
      <laywerStack.Screen name="ramachandra" component={laywerOne} />
    </laywerStack.Navigator>
  );
}