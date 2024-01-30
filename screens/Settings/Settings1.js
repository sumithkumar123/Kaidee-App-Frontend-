import {  StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead} from '../CommonCss/formcss'
import { MaterialIcons } from '@expo/vector-icons';
import { goback } from '../CommonCss/pagecss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings1 = ({ navigation }) => {
    const logout = () => {
        AsyncStorage.removeItem('user').then(() => {
            alert('Logged out successfully')
            navigation.navigate('lawyerLoginScreen')
        })
    }
    return (
        <View style={styles.container}>
            {/* <Ionicons name="chevron-back-circle" size={24} color="black" style={styles.gohomeicon}
                onPress={() => navigation.navigate('DrawerScreen')}
            /> */}
            <TouchableOpacity onPress={() => navigation.navigate('lawyerDrawerScreen')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}
                >Go Back</Text>
            </TouchableOpacity>r
                           
            <Text style={formHead}>Settings</Text>
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
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    txt1: {
        marginTop: 20,
        color: 'black',
        fontSize: 20,
        borderBottomColor: 'gray',
        paddingLeft:'2%',
        borderBottomWidth: 1,
    }
})