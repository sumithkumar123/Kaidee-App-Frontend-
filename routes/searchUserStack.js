import React from 'react';
import {Text, TextInput, View, Button,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Searchlawyer from '../screens/searchlawyer';
import LawyerMessagePage from '../laywerlogin/laywerscreens/lawyerMessagePage';
import LawyerOtherLawyerProfile from '../laywerlogin/laywerscreens/lawyerotherLawyerProfile';
import LawyerUserCard from '../laywerlogin/laywerscreens/lawyerUserCard';

const SearchStack = createNativeStackNavigator();

export default function SearchUserStack() {
  return (
   
    <SearchStack.Navigator initialRouteName="Searchlawyer">
        <SearchStack.Screen name="Searchlawyer" component={Searchlawyer} />
        <SearchStack.Screen name="LawyerUserCard" component={LawyerUserCard}  />
        <SearchStack.Screen name="LawyerMessagePage" component={LawyerMessagePage}  />
        <SearchStack.Screen name="LawyerOtherLawyerProfile" component={LawyerOtherLawyerProfile}  />
        {/* <HomeStack.Screen name="Bail" component={lawyerBail} 
      
       /> */}
        
    </SearchStack.Navigator>
  );
}