import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings1 = ({ navigation }) => {
    const logout = () => {
        AsyncStorage.removeItem('user').then(() => {
            alert('Logged out successfully')
            navigation.navigate('Login')
        })
    }
    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}

                onPress={() => navigation.navigate('My_UserProfile')}
            />
            <Text style={styles.formHead}>Settings</Text>

            <Text style={styles.txt1}
                onPress={() => navigation.navigate('EditProfile')}
            >Edit Profile</Text>
            <Text style={styles.txt1}
                onPress={() => navigation.navigate('ChangePassword')}
            >Change Password</Text>
            <Text style={styles.txt1}>Customer Support</Text>
            <Text style={styles.txt1} onPress={
                () => logout()
            }>Logout</Text>
        </View>
    )
}

export default Settings1

const styles = StyleSheet.create({
    formInput: {
        width: '80%',
        // height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth:5,
        borderColor:"black",
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 18,
    },
    formbtn: {
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        marginVertical: 10,
    },
    formHead2: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        // fontWeight: 'bold',
        // backgroundColor: 'white',
    },
    containerFull: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo1: {
        height: 100,
        width: 200,
        
        resizeMode: 'contain',
        marginBottom: 20
        // backgroundColor: 'white',
    },
    hr80: {
        width: '80%',
        height: 1,
        backgroundColor: 'black',
        marginVertical: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    goback: {
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        left: 20,
        alignItems: 'center'
    },
    icons1: {
        //color: 'white',
        fontSize: 30,
    },
    logo2: {
        height: 30,
        // width: 200,
        resizeMode: 'contain',
        // backgroundColor: 'white',
        width: 100,
    },
    searchbar: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 18,
        alignSelf: 'center',
    },
    formHead: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
})