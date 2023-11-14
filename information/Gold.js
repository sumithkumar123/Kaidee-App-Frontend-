import React from "react";
import { StyleSheet,View,Text,} from "react-native";
import {openURL} from 'expo-linking';


export default function Gold({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:15}}>Address: Rocky Hill Flats,N.Dabholkar Road,Bombay-6</Text>
            <Text style={{fontSize:15}}>Date of designation as senior advocate: 23-7-1966</Text>
            <Text style={{fontSize:15}}>Remarks: Advocate</Text>
            <View style={{margin:5}}><Button title= "contact"/></View>
            <View style={{margin:5,flexDirection:'row'}}><Button title= "Detail" onPress={() => openURL("https://en.wikipedia.org/wiki/Fali_Sam_Nariman")}/></View>
        </View>
    ) 
}