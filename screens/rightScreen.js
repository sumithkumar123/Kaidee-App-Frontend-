import React, { useState } from 'react';
import { View, Text, TextInput, Button , StyleSheet, ScrollView } from 'react-native';
import rightToAccomadate from './rightToAccomadate';
export default function rightScreen({ navigation }){
  return (
    <ScrollView>
      <View style={styles.container} onPress={() => navigation.navigate('rightToAccomadate')}>
        <Text onPress={() => navigation.navigate('rightToAccomadate')}>Right to Accomadate</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('rightToShelter')}>Right to Shelter</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('rightToEmploy')}>Right to be employed</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('rightToCloth')}>Right to get clothing</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('rightToHuman')}>Right to Human diginity</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 80,
    width: 450,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    margin: 20,
  },
});