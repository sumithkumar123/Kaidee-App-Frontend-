import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
//import SignupScreen from '../screens/signUpScreen';
import DrawerScreen from '../screens/drawer';
import OtherLawyerProfile from '../screens/otherLawyerProfile';
import MessagePage from '../screens/MessagePage';

const LoginStack = createNativeStackNavigator();

export default function LoginStackScreen() {
  return (
    <LoginStack.Navigator >
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} 
      options={{ headerShown: true }} />
        <LoginStack.Screen name="DrawerScreen" component={DrawerScreen} 
      options={{ headerShown: false }} />
   {/* <LoginStack.Screen name="signUpStackScreen" component={signUpStackScreen} 
      options={{ headerShown: false }} /> */}
  <LoginStack.Screen name="MessagePage" component={MessagePage} 
      options={{ headerShown: false }} />
  <LoginStack.Screen name="OtherLawyerProfile" component={OtherLawyerProfile} 
      options={{ headerShown: false }} />
 
  
    </LoginStack.Navigator>
  );
}