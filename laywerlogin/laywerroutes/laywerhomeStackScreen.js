import React from 'react';
import {Text, TextInput, View, Button,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

import lawyerOne from '../../information/laywerOne';
import lawyerDashboard from '../laywerinformation/laywerdashboardinfo';
import lawyerBail from '../laywerinformation/laywerbailinfo';
import LawyerlawyerStackScreen from './laywerlaywerStackScreen';
import lawyerHome from '../laywerscreens/laywerHome';
const HomeStack = createNativeStackNavigator();

export default function lawyerHomeStackScreen() {
  return (
   
    <HomeStack.Navigator>
      
      <HomeStack.Screen name="Home" component={lawyerHome} 
          options={{ headerShown: false }}
      />
        <HomeStack.Screen name="LawyerStackScreen" component={LawyerlawyerStackScreen} />
        <HomeStack.Screen name="Dashboard" component={lawyerDashboard}  />
        <HomeStack.Screen name="lawyerOne" component={lawyerOne}  />
        <HomeStack.Screen name="Bail" component={lawyerBail} 
      
       />
         {/* <HomeStack.Screen name="Gold" component={Gold}  />
         

         <HomeStack.Screen name="Ramachandra" component={Ramachandra} />
            <HomeStack.Screen name="Raj" component={Raj} />
            <HomeStack.Screen name="Kha" component={Kha} />
            <HomeStack.Screen name="Say" component={Say} /> */}
      {/* <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} 
      options={{
        title: 'ProfileScreen',
        headerStyle: {
          backgroundColor: '#879090',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} /> */}
    </HomeStack.Navigator>
  );
}