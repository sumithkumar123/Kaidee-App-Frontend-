import React from "react";
import { StyleSheet,View,Text ,ScrollView} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Rehabilation() {
    return (
        <ScrollView>
            <View style={styles.youtube}> 
            <Text style={styles.texts}>Carpentry</Text>
            <YoutubePlayer 
                height={300}
                width={400}
                play={false}
                videoId={'sNaHN4tZmRk'}
            />
            <Text style={styles.texts}>Welding</Text>
           <View style={styles.youtube} >
            <YoutubePlayer 
            height={300}
            width={400}
            play={false}
            videoId={'e037nbVAwm8'}
            />                    
            </View>
            <View>
            <Text style={styles.texts}>Tailoring</Text>
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
    youtube:{
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
        margin:20,   
      },
    texts: {
        padding:10,
        height:30,
        margin:5,
        fontSize:24,
    }
})