import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead } from '../../../screens/CommonCss/formcss';
const LawyerEditProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.logo1}

                onPress={() => navigation.navigate('LawyerSettings1')}
            />
            <Text style={formHead}>Edit Profile</Text>

            <Text style={styles.txt1}
                onPress={() => navigation.navigate('LawyerUploadProfilePicture')}
            >Change Profile Picture</Text>
            <Text style={styles.txt1}
                onPress={() => navigation.navigate('LawyerChangeUsername')}
            >Change Username</Text>
            <Text style={styles.txt1}
                onPress={() => navigation.navigate('LawyerChangeDescription')}
            >Change Description</Text>

        </View>
    )
}

export default LawyerEditProfile

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    txt1: {
        marginTop: 20,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    logo1: {
        height: 100,
        width: 200,
        
        resizeMode: 'contain',
        marginBottom: 20
    },
})