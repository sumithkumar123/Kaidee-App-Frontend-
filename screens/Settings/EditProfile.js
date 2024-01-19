import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
const EditProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}

                onPress={() => navigation.navigate('Settings_1')}
            />
            <Text style={formHead}>Edit Profile</Text>

            <Text style={styles.txt1}
                onPress={() => navigation.navigate('UploadProfilePicture')}
            >Change Profile Picture</Text>
            <Text style={styles.txt1}
                onPress={() => navigation.navigate('ChangeUsername')}
            >Change Username</Text>
            <Text style={styles.txt1}
                onPress={() => navigation.navigate('ChangeDescription')}
            >Change Description</Text>

        </View>
    )
}

export default EditProfile

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