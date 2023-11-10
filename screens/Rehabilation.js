import React from "react";
import { StyleSheet,View,Text ,ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VocationalStackScreen from "../routes/vocationalstackscreen";
import EducationalStackScreen from "../routes/educationalStackScreen";
import RehabilationHome from "./rehabilationHome";
import MentalHealthStackScreen from "../routes/mentaHealthStackScreen";

const RehabilationStack=createNativeStackNavigator(); 

export default function Rehabilation() {
    return (
        <RehabilationStack.Navigator 
        screenOptions={{ headerShown: false }} 
        initialRouteName="RehabilationHome"> 

         <RehabilationStack.Screen name="RehabilationHome" component={RehabilationHome} />
          <RehabilationStack.Screen name="VocationalStackScreen" component={VocationalStackScreen} />
          <RehabilationStack.Screen name="EducationalStackScreen" component={EducationalStackScreen} />
          <RehabilationStack.Screen name="MentalHealthStackScreen" component={MentalHealthStackScreen} />


          {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}
  
        </RehabilationStack.Navigator>
       
     
    ) 
}
const styles=StyleSheet.create({
    youtube:{
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20, 
        marginTop:10,
        padding:10,
      },
    texts: {
        padding:10,
        height:60,
        width:'100%',
        marginBottom:20,
        fontSize:34,
        fontWeight:'bold',
        textAlign:'left',
        backgroundColor:'black',
        color:'white'
    }
})