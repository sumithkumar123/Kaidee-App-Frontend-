import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import lawyerLoginScreen from '../laywerscreens/laywerloginScreen';
import lawyerSignupScreen from '../laywerscreens/laywersignUpScreen';
import lawyerDrawerScreen from '../laywerscreens/laywerdrawer';

const LoginStack = createNativeStackNavigator();

export default function LawyerLoginStackScreen() {
  return (
    <LoginStack.Navigator >
        <LoginStack.Screen name="lawyerLoginScreen" component={lawyerLoginScreen} 
      options={{ headerShown: false }} />
      <LoginStack.Screen name="lawyerSignUpScreen" component={lawyerSignupScreen} 
        options={{ headerShown: false }} />
      <LoginStack.Screen name="lawyerDrawerScreen" component={lawyerDrawerScreen} 
      options={{ headerShown: false }}
  />
    </LoginStack.Navigator>
  );
}