import React from 'react';
import {Text,View, Button,StyleSheet,Card,Image,TouchableOpacity,ImageBackground} from 'react-native';
const image = {uri:"https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg"}


export default function FirstScreen({navigation}) {
    return (

      <ImageBackground  source={image} 
      resizeMode='cover'
      style={styles.backgroundImage}>
        <View style={styles.main}>
           <View style={styles.bg}>

               <Text style={{fontSize:28,color:'white',textAlign:'center',}} onPress={() => navigation.navigate('LoginStackScreen')}>Lawyers</Text>
            </View>
            <View style={styles.bg}>
              <Text style={{fontSize:28,color:'white',textAlign:'center',}} onPress={() => navigation.navigate('LoginStackScreen')}>undertrial</Text>
            
            </View>
        </View>

       </ImageBackground>
    );
  }   
       
     

  const styles=StyleSheet.create({
    texts:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    main:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      
    },
    bg:{
      height:70,
      width:200,
      //borderWidth:3,
      backgroundColor:"purple",
      alignItems:'center',
      justifyContent:'center',
      margin:15,
      borderRadius:15,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
      },
 
  })