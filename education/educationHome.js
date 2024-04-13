


import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function EducationalHome({navigation}) {
  return (
    <ScrollView>
    <View style={styles.screen}>
    <Text style={styles.headtext}>Educational Programs</Text>
   <View style={styles.works1}>
    

     <TouchableOpacity onPress={() => navigation.navigate('OpenDegree')}>
       <View style={styles.buttonContainer}>
       <View style={styles.buttonbox}>

         <Image
           style={styles.buttonImage}
           source={require('../assets/mortarboard.gif')}  
         />
       </View>
       <Text style={styles.textcont}>Open-Degree</Text>

       </View>

     </TouchableOpacity>

     <TouchableOpacity onPress={() => navigation.navigate('OpenMBA')}>
       <View style={styles.buttonContainer}>
       <View style={styles.buttonbox}>

         <Image
           style={styles.buttonImage}
           source={require('../assets/graduate.gif')}  
         />

         </View>
         <Text style={styles.textcont}>Open-MBA</Text>

       </View>
     </TouchableOpacity>

    
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
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  texts: {
    flexDirection: 'row',
    borderWidth: 2,
    width: 450,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    margin: 20,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'skyblue',
  },

  textcont: {
    textAlign: 'center',
    padding: 2,
    fontWeight: 'bold',
  },

  works: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    backgroundColor: 'white',
    borderRadius:7,
  },

  headtext: {
    fontSize: 26,
    textAlign: 'left',
    fontWeight: 'bold',
    margin:10,
  },
  youtube: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
    padding: 10,
  },
  buttonImage: {
    width: 70,  
    height: 70, 
    padding:5,
    margin:5,
    
  },
  buttonbox:{
    borderColor:'black',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7,
  },
  buttonContainer: {
    padding: 50, 
    flexDirection:'column',
    textAlign:'center', 
    padding:10,
    width:120,
    marginRight:20,
    marginLeft:20,
  },
  screen: {
    backgroundColor: 'white',
  },
  works1: {
    padding: 60,
    borderWidth: 2,
    borderColor: '#eee',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius:7,

  },
});
