import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import lawyerlawyerOne from '../laywerinformation/laywerlaywerOne';
import Lawyers from '../laywerinformation/laywerlawyersinfo';
const lawyerStack= createNativeStackNavigator();

export default function lawyerlawyerStackScreen() {
  return (
    <lawyerStack.Navigator >
      <lawyerStack.Screen name="lawyersinfo" component={Lawyers} options={{ headerShown: false }} />
      <lawyerStack.Screen name="ramachandra" component={lawyerlawyerOne} />
    </lawyerStack.Navigator>
  );
}