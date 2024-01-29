import * as React from 'react';
import { Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LawyerHomeStackScreen from '../laywerroutes/laywerhomeStackScreen';
import LawyerProfileScreen from './laywerprofileScreen';
import LawyerSearchlawyer from './lawyerSearchLawyer';
import LawyerMessagePage from './lawyerMessagePage';
import { MaterialIcons } from '@expo/vector-icons';

import LawyerSearchStack from '../laywerroutes/lawyerSearchStack';
import MessagePage from '../../screens/MessagePage';
const Tab = createMaterialBottomTabNavigator();

export default function LawyerMainScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
       <Tab.Screen name="LawyerHomeStackScreen" component={LawyerHomeStackScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        // headerTitle: (props) => <LogoTitle {...props} />,
        title: 'Home Screen',
        headerStyle: {
          backgroundColor: 'black',
        }, 
        headerTintColor: '#fff',
       
        headerTitleStyle: { 
          fontWeight: 'bold',
        },  

          headerRight: () => (
          <TouchableHighlight
            onPress={() => navigation.navigate('LawyerProfileScreen')}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../assets/user1.png')}
    />    
          </TouchableHighlight>
  )
        
      }}  />
       {/* <Tab.Screen name="MessagePage" component={MessagePage} 
      
      options={{
        tabBarLabel: 'LawyerMessagePage',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
        title: 'LawBot',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
      }} /> */}
      <Tab.Screen name="LawyerSearchStack" component={LawyerSearchStack} 
      options={{
        tabBarLabel: 'searchprisoner',
        tabBarIcon: ({ color }) => (
          
          <MaterialIcons name="person-search" size={30} color="black" />
        ),
        title: 'searchprisoner',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
      }} />


       <Tab.Screen name="LawyerProfileScreen" component={LawyerProfileScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
        title: 'ProfileScreen',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
      }} />
      

    </Tab.Navigator>  
    );
}
