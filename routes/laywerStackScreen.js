import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import lawyersinfo from '../information/lawyersinfo';
import laywerOne from '../information/laywerOne';
import Lawyers from '../information/lawyersinfo';
const laywerStack= createNativeStackNavigator();

export default function LaywerStackScreen() {
  return (
    <laywerStack.Navigator >
      <laywerStack.Screen name="lawyersinfo" component={Lawyers} options={{ headerShown: false }} />
      <laywerStack.Screen name="ramachandra" component={laywerOne} />
    </laywerStack.Navigator>
  );
}