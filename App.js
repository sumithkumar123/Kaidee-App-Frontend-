import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackScreen from './routes/LoginStackScreen';
import firstStackScreen from './routes/firstStackScreen';
import lawyerLoginStackScreen from './laywerlogin/laywerroutes/laywerloginStackScreen';
import FirstScreen from './screens/firstscreen';

const Stack = createNativeStackNavigator(); 
 //hell
export default function App() {
  return (
    <NavigationContainer> 
     
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}>

                <Stack.Screen name="firstStackScreen" component={firstStackScreen} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="laywerLoginStackScreen" component={lawyerLoginStackScreen} />

                <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />


        {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>   
  
);
}

