import React from "react";
import { StyleSheet,View,Text ,ScrollView} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Carpentry() {
    return (
      <ScrollView>
        <View style={styles.screen}>
            <View style={styles.youtube}>        
            <YoutubePlayer 
                height={300}
                width={400}
                play={false}
                videoId={'sNaHN4tZmRk'}
            />
            </View>
           <View style={styles.youtube} >
            <YoutubePlayer 
            height={300}
            width={400}
            play={false}
            videoId={'e037nbVAwm8'}
            />                    
            </View>
                        
            <View style={styles.youtube}>
            <YoutubePlayer 
            height={300}
            width={400}
            play={true}
            videoId={'e037nbVAwm8'}
            />                    
            </View>
        </View>
        </ScrollView>
    ) 
}
const styles=StyleSheet.create({

  texts: {
    flexDirection: 'row',
    borderWidth: 2,
    width: 450,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    margin: 20,
    textAlign:'center',
    backgroundColor:'black',
    color:'skyblue',

  },
    textcont: {
      textAlign:'center',
      padding:2,
    },
    works: {
      padding:10,
      borderWidth:2,
      borderColor:'black',
      margin:20,
      justifyContent:'center',
      alignItems:'center',
      height:300,
      backgroundColor:'white',
    },
    headtext: {
      fontSize:26,
      textAlign:'center',
      fontWeight:'bold',
    },
    youtube:{
      flexDirection:'column',
      alignItems:"center",
      justifyContent:"center",
      marginBottom:20, 
      marginTop:10,
      padding:10,
    },
    screen: {
      backgroundColor:'white',
    }
})