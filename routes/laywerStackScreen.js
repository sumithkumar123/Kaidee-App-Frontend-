import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import lawyersinfo from '../information/lawyersinfo';
import lawyerOne from '../information/laywerOne';
import Lawyers from '../information/lawyersinfo';
const lawyerStack= createNativeStackNavigator();

export default function lawyerStackScreen() {
  return (
    <lawyerStack.Navigator >
      <lawyerStack.Screen name="lawyersinfo" component={Lawyers} options={{ headerShown: false }} />
      <lawyerStack.Screen name="ramachandra" component={lawyerOne} />
    </lawyerStack.Navigator>
  );
}