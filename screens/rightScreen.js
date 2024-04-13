import React, { useState } from 'react';
import { View, Text, TextInput, Button , StyleSheet, ScrollView } from 'react-native';
import rightToAccomadate from './rightToAccomadate';
export default function RightScreen({ navigation }){
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('RightToAccomadate')}>Right to Accomadate</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('RightToShelter')}>Right to Shelter</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('RightToEmploy')}>Right to be employed</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('RightToCloth')}>Right to get clothing</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('RightToHuman')}>Right to Human diginity</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    width: 450,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    margin: 20,
  },
});

