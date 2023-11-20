import React from "react";
import { StyleSheet,View,Text ,ScrollView,Image} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
export default function rightToAccomadate() {
    return (
        <View style={{backgroundColor: '#fff',flexDirection:'column',alignItems:"center",justifyContent:"center",}}>
            <Text style={{fontSize:40,color:'black',textAlign:'center',padding: 20,}} > About right to accomadate</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style={{fontSize:30,color:'black',width: 300,padding: 5,}}>The prisioners have the right to be provided accommodation constructed and maintained accordingbto the provision of the Prisions Act,1894.
                The Model Prison Mnual (2016) also mentions that living conditions in every prison shall be compitable with human diginity in all aspects such aspects
                accomadation, hygiene,sanitation,food,clothing,medical facilities,etc.
              </Text>
              <Image source={{uri: 'https://psacunion.ca/sites/psac/files/brochure_cover.png',
                          width: 500,
                          height: 700,}}/>
            </View>
              <YoutubePlayer style={styles.youtube}
                      width={700}
                      height={300}
                      play={false}
                      videoId={'kGShnVjzq94'}
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

