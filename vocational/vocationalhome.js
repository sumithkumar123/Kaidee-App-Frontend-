import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Carpentry from './carpentry'
import Welding from './welding'
// import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";

export default function VocationalHome({navigation}) {
  return (
    <View style={styles.screen}>
    <Text style={styles.headtext}>Vocational Programs</Text>
   <View style={styles.works1}>
    

     <TouchableOpacity onPress={() => navigation.navigate('Carpentry')}>
       <View style={styles.buttonContainer}>
       <View style={styles.buttonbox}>

         <Image
           style={styles.buttonImage}
           source={require('../assets/hacksaw.gif')}  // Replace with the actual path to your image
         />
       </View>
       <Text style={styles.textcont}>Carpentry</Text>

       </View>

     </TouchableOpacity>

     <TouchableOpacity onPress={() => navigation.navigate('Welding')}>
       <View style={styles.buttonContainer}>
       <View style={styles.buttonbox}>

         <Image
           style={styles.buttonImage}
           source={require('../assets/welding.gif')}  // Replace with the actual path to your image
         />

         </View>
         <Text style={styles.textcont}>Welding</Text>

       </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => navigation.navigate('Tailoring')}>
       <View style={styles.buttonContainer}>
       <View style={styles.buttonbox}>

         <Image
           style={styles.buttonImage}
           source={require('../assets/tailor.gif')}  // Replace with the actual path to your image
         />
       </View>
       <Text style={styles.textcont}>Tailoring</Text>

       </View>

     </TouchableOpacity>
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
  },
  headtext: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom:10,
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
    width: 70,  // Adjust the width as needed
    height: 70, 
    padding:5,
    margin:5,
    // Adjust the height as needed
  },
  buttonbox:{
    borderColor:'#eee',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonContainer: {
    padding: 50, 
    flexDirection:'column',
    textAlign:'center', 
    padding:10,
    width:120,// Add padding here
    marginRight:20,
    marginLeft:20,
  },
  screen: {
    backgroundColor: 'white',
  },
  works1: {
    padding: 60,
    borderWidth: 2,
    borderColor: 'white',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});
