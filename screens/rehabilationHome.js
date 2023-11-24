import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function RehabilationHome({ navigation }) {
  return (
    <View style={styles.screen}>
       <Text style={styles.headtext}>Rehabilation Programs</Text>
      <View style={styles.works1}>
       

        <TouchableOpacity onPress={() => navigation.navigate('VocationalStackScreen')}>
          <View style={styles.buttonContainer}>
            <Image
              style={styles.buttonImage}
              source={require('../assets/favicon.png')}  // Replace with the actual path to your image
            />
          </View>
          <Text>bolm</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EducationalStackScreen')}>
          <View style={styles.buttonContainer}>
            <Image
              style={styles.buttonImage}
              source={require('../assets/hacksaw.gif')}  // Replace with the actual path to your image
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MentalHealthStackScreen')}>
          <View style={styles.buttonContainer}>
            <Image
              style={styles.buttonImage}
              source={require('../assets/favicon.png')}  // Replace with the actual path to your image
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.works}>
        <Text style={styles.headtext}>About Rehabilation </Text>
        <ScrollView>
          <Text style={styles.textcont}>
            Rehabilitation of sensory and cognitive function typically involves methods for retraining neural pathways or training new neural pathways to regain or improve neurocognitive functioning that have been diminished by disease or trauma.
            The main objective outcome for rehabilitation is to assist in regaining physical abilities and improving performance.
          </Text>
          <View style={styles.youtube}>
            <YoutubePlayer
              height={300}
              width={400}
              play={false}
              videoId={'_ZeTdwbwnfU'}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
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
  },
  works: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
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
    height: 70,  // Adjust the height as needed
  },
  buttonContainer: {
    padding: 50,  // Add padding here
  },
  screen: {
    backgroundColor: 'white',
  },
  works1: {
    padding: 60,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});
