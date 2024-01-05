import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackScreen from './LoginStackScreen';
import FirstScreen from '../screens/firstscreen';
import lawyerLoginStackScreen from '../laywerlogin/laywerroutes/laywerloginStackScreen';

const Stack = createNativeStackNavigator(); 
 //hell
export default function firstStackScreen() {
  return (
     
      <Stack.Navigator 
      
      screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FirstScreen" component={FirstScreen} />

                 <Stack.Screen name="laywerLoginStackScreen" component={lawyerLoginStackScreen} />


        <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />

        {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}

      </Stack.Navigator> 
  
);
}

