import React from 'react';
import {Text, TextInput, View, Button,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LawyerSearchlawyer from '../laywerscreens/lawyerSearchLawyer';
import MessagePage from '../../screens/MessagePage';
import OtherLawyerProfile from '../../screens/otherLawyerProfile';
import UserCard from '../../screens/UserCard';

const SearchStack = createNativeStackNavigator();

export default function LawyerSearchStack() {
  return (
   
    <SearchStack.Navigator initialRouteName="LawyerSearchlawyer">
        <SearchStack.Screen name="LawyerSearchlawyer" component={LawyerSearchlawyer} />
        <SearchStack.Screen name="UserCard" component={UserCard}  />
        <SearchStack.Screen name="MessagePage" component={MessagePage}  />
        <SearchStack.Screen name="OtherLawyerProfile" component={OtherLawyerProfile}  />
        {/* <HomeStack.Screen name="Bail" component={lawyerBail} 
      
       /> */}
        
    </SearchStack.Navigator>
  );
}