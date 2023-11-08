import React from "react";
import { StyleSheet,View,Text,Button,Alert,ScrollView} from "react-native";

export default function Lawyers() {
    return (
        <ScrollView>
                <View style={styles.main}>
                    <View style={styles.bg}>
                        <Text style={{fontSize:28,color:'black',textAlign:'center',}}>  Mr.Ramachandra Martand Hajarnavis </Text>
                        <Text style={{fontSize:15,textAlign:'center',}}>Address: 89,shahjahan road,New Delhi</Text>
                        <Text style={{fontSize:15,textAlign:'center',}}>Date of designation as senior advocate: 26-3-1966</Text>
                        <Text style={{fontSize:15,textAlign:'center',}}>Remarks: Retired Judge,Bombay High Court</Text>
                        <View style={{flex:1,margin:5,textAlign:'center',width:100}} >< Button title= "contact" onPress={() => Alert.alert('contact now!!')}/></View>
                    </View>
                    <View style={styles.bg}>
                        <Text style={{fontSize:28,color:'black',textAlign:'center',}} >Mr. Hari Ramchandra Gokhle</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Address: Rocky Hill Flats,N.Dabholkar Road,Bombay-6</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 23-7-1966</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
                        <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
                    </View>

                    <View style={styles.bg}>
                        <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr. G. R. Rajagopaul</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Address: c-53,south Extn.Part-1,New Delhi</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 3-10-1966</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
                        <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
                    </View>
                    <View style={styles.bg}>
                        <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Dr.V.A.Sayed Muhammed</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Address: Address not available</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-11-1966</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate General</Text>
                        <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
                    </View>
                    <View style={styles.bg}>
                        <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr.N.D.Khar Khanis</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Address: 122,Golf Links,N.D.</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-10-1967</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
                        <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
                    </View>
                </View>
        </ScrollView>

    )
}
const styles= StyleSheet.create({
    main:{
        backgroundColor:'black',
    },
    bg:{
        backgroundColor:'white',
        color:'black',
        padding:10,
        margin:10,
    }


})