import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Carpentry from './carpentry'
import Welding from './welding'
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";

export default function VocationalHome({navigation}) {
  return (
    <View style={styles.screen}>
      <View style={styles.works}>
      <Text style={styles.headtext}>Vocational Programs</Text>

        <ScrollView>
      <Text style={styles.texts} onPress={() => navigation.navigate('Carpentry')}>Carpentry</Text>
      <Text style={styles.texts} onPress={() => navigation.navigate('Welding')}>Welding</Text>
      <Text style={styles.texts} onPress={() => navigation.navigate('Tailoring')}>Tailoring</Text>

      </ScrollView>
      </View>

      <View style={styles.works}>

      <Text style={styles.headtext}>About Vocational Education </Text>
      <ScrollView>
        <Text style={styles.textcont}>
        Vocational education is education that prepares people for a skilled craft as an artisan, trade as a tradesperson, or work as a technician. Vocational education can also be seen as that type of education
         given to an individual to prepare that individual to be gainfully employed or self employed with requisite skill.
        </Text>
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