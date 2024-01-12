import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import lawyersinfo from '../information/lawyersinfo';
import LawyerOne from '../information/laywerOne';
import Lawyers from '../information/lawyersinfo';
const lawyerStack= createNativeStackNavigator();

export default function LawyerStackScreen() {
  return (
    <lawyerStack.Navigator >
      <lawyerStack.Screen name="lawyersinfo" component={Lawyers} options={{ headerShown: false }} />
      <lawyerStack.Screen name="ramachandra" component={LawyerOne} />
    </lawyerStack.Navigator>
  );
}