import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Prisoners from '../../information/prisoners';
const lawyerStack= createNativeStackNavigator();

export default function LawyerlawyerStackScreen() {
  return (
    <lawyerStack.Navigator >
      <lawyerStack.Screen name="prisonersinfo" component={Prisoners} options={{ headerShown: false }} />
    </lawyerStack.Navigator>
  );
}