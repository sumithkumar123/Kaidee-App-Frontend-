import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RightScreen from '../screens/rightScreen';
import RightToAccomadate from '../screens/rightToAccomadate';
import RightToCloth from '../screens/rightToColth';
import RightToEmploy from '../screens/rightToEmploy';
import RightToShelter from '../screens/rightToShelter';
import RightToHuman from '../screens/rightToHuman';
const rightStack= createNativeStackNavigator();

export default function RightStackScreen() {
  return (
    <rightStack.Navigator initialRouteName='RightScreen'>
      <rightStack.Screen name="RightScreen" component={RightScreen} />
      <rightStack.Screen name="RightToAccomadate" component={RightToAccomadate} />
      <rightStack.Screen name="RightToShelter" component={RightToShelter} />
      <rightStack.Screen name="RightToEmploy" component={RightToEmploy} />
      <rightStack.Screen name="RightToCloth" component={RightToCloth} />
      <rightStack.Screen name="RightToHuman" component={RightToHuman} />
    </rightStack.Navigator>
  );
}