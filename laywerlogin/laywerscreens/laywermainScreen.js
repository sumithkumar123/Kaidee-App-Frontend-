import * as React from 'react';
import { Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import lawyerHomeStackScreen from '../laywerroutes/laywerhomeStackScreen';
import lawyerProfileScreen from './laywerprofileScreen';
import lawyerDashboard from '../laywerinformation/laywerdashboardinfo';
import Searchlawyer from '../../screens/searchlawyer';
import MessagePage from '../../screens/MessagePage';
import { MaterialIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default function lawyerMainScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
       <Tab.Screen name="HomeS" component={lawyerHomeStackScreen} 
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
            onPress={() => navigation.navigate('lawyerProfileScreen')}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../assets/user1.png')}
    />    
          </TouchableHighlight>
  )
        
      }}  />
       <Tab.Screen name="MessagePage" component={MessagePage} 
      
      options={{
        tabBarLabel: 'MessagePage',
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
      }} />
       <Tab.Screen name="Rehabilation" component={lawyerProfileScreen} 
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
      <Tab.Screen name="Searchlawyer" component={Searchlawyer} 
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



    </Tab.Navigator>  
    );
}
