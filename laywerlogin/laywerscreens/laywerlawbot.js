import React from "react";
import { StyleSheet,View } from "react-native";
import ChatBot from "../lawyersrc/lawyerindex";

export default function LawBot() {
    return (
        <View style={styles.container}>
            <ChatBot />
        </View>
    ) 
}
const styles=StyleSheet.create({
    container : {
        flex:1,
      }
})