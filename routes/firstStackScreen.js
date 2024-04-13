import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackScreen from './loginStackScreen';
import FirstScreen from '../screens/firstscreen';
import LawyerLoginStackScreen from '../laywerlogin/laywerroutes/laywerloginStackScreen';

const Stack = createNativeStackNavigator(); 
 //hell
export default function FirstStackScreen() {
  return (
     
      <Stack.Navigator 
      
      screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FirstScreen" component={FirstScreen} />

                 <Stack.Screen name="LawyerLoginStackScreen" component={LawyerLoginStackScreen} />


        <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />

        {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}

      </Stack.Navigator> 
  
);
}

