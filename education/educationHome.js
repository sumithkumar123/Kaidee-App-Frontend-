import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import OpenDegree from './opendegree'
import OpenMBA from './openmba'
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";

export default function EducationHome({navigation}) {
  return (
    <View>
      <View style={styles.screen}>
      <View style={styles.works}>
      <Text style={styles.headtext}>Educational Programs</Text>

        <ScrollView>
      <Text style={styles.texts} onPress={() => navigation.navigate('OpenDegree')}>Open-Degree</Text>
      <Text style={styles.texts} onPress={() => navigation.navigate('OpenMBA')}>Open-MBA</Text>
      </ScrollView>
      </View>

      <View style={styles.works}>

      <Text style={styles.headtext}>About Education </Text>
      <ScrollView>
        <Text style={styles.textcont}>
        Education is the transmission of knowledge, skills, and character traits. 
        Its precise definition is disputed and there are disagreements about what the aims of education are and to what extent
         education is different from indoctrination by fostering critical thinking. </Text>
        <View style={styles.youtube}>        
            <YoutubePlayer 
                height={300}
                width={400}
                play={false}
                videoId={'sNaHN4tZmRk'}
            />
            </View>
      </ScrollView>
      </View>
      </View>
      </View>

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