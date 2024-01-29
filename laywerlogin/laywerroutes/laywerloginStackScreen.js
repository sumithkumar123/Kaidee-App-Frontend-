import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import lawyerLoginScreen from '../laywerscreens/laywerloginScreen';
import lawyerSignupScreen from '../laywerscreens/laywersignUpScreen';
import LawyerDrawerScreen from '../laywerscreens/laywerdrawer';
import LawyerMessagePage from '../laywerscreens/lawyerMessagePage';
import LawyerOtherLawyerProfile from '../laywerscreens/lawyerotherLawyerProfile';
import LawyerLoginScreen from '../laywerscreens/laywerloginScreen';

const LoginStack = createNativeStackNavigator();

export default function LawyerLoginStackScreen() {
  return (
    <LoginStack.Navigator >
        <LoginStack.Screen name="LawyerLoginScreen" component={LawyerLoginScreen} 
      options={{ headerShown: true }} />
      {/* <LoginStack.Screen name="lawyerSignUpScreen" component={lawyerSignupScreen} 
        options={{ headerShown: false }} /> */}
      <LoginStack.Screen name="LawyerDrawerScreen" component={LawyerDrawerScreen} 
      options={{ headerShown: false }}/>
       <LoginStack.Screen name="LawyerMessagePage" component={LawyerMessagePage} 
      options={{ headerShown: false }} />
       <LoginStack.Screen name="LawyerOtherLawyerProfile" component={LawyerOtherLawyerProfile} 
      options={{ headerShown: false }} />
    </LoginStack.Navigator>
  );
}