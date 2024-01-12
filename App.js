import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackScreen from './routes/LoginStackScreen';
import FirstStackScreen from './routes/firstStackScreen';
import LawyerLoginStackScreen from './laywerlogin/laywerroutes/laywerloginStackScreen';
import FirstScreen from './screens/firstscreen';

const Stack = createNativeStackNavigator(); 
 //hell
export default function App() {
  return (
    <NavigationContainer> 
     
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}>

                <Stack.Screen name="FirstStackScreen" component={FirstStackScreen} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="LaywerLoginStackScreen" component={LawyerLoginStackScreen} />
                <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />


        {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>   
  
);
}

