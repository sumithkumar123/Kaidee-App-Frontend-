import React from "react";
import { StyleSheet,View,Text ,ScrollView,Image} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
export default function RightToEmploy() {
    return (
        <View style={{backgroundColor: '#fff',flexDirection:'column',alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:40,color:'black',textAlign:'center',padding: 20}} > About right to be Employed</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize:30,color:'black',width: 300,padding: 5}}>Prisioners who are sentenced to rigiours imprisonment shall not be engaged in manual
              labour for more tha nine hours in any one day ,expect on an emergency with the sanction in writing of the Superintendent.
              the medical officer shall examine the prisioners from time to time while they are working and shall record thir respective weights at least once every two weeks on the history ticket of each prisioner employed on labour.
              </Text>
              <Image source={{uri: 'https://www.investopedia.com/thmb/rw1XqtUR8CodtOHlJS_qhoxbeNY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/righttowork-law.aspfinal-993592863fb440dfb17b8f6cbbe3c967.jpg',
                          width: 700,
                          height: 700}}/>
            </View>
              <YoutubePlayer style={styles.youtube}
                      width={700}
                      height={300}
                      play={false}
                      videoId={'RnLEy5HzPkQ'}
                  />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 28,
    color: 'black',
    textAlign:'center',
  },
  youtube:{
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20, 
    marginTop:10,
    padding:10,
  },
});

