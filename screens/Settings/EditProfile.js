import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead} from '../CommonCss/formcss';
import { goback } from '../CommonCss/pagecss';
import { MaterialIcons } from '@expo/vector-icons';
const EditProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Ionicons name="chevron-back-circle" size={24} color="black" style={styles.logo1}

                onPress={() => navigation.navigate('Settings1')}
            /> */}
            <TouchableOpacity onPress={() => navigation.navigate('Settings1')} style={goback}>

<MaterialIcons name="arrow-back-ios" size={24} color="gray" />
<Text style={{
    color: 'gray',
    fontSize: 16,
}}
>Go Back</Text>
</TouchableOpacity>
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
        borderBottomWidth: 1,
        paddingLeft:'2%',
    },
    logo1: {
        height: 100,
        width: 200,
        
        resizeMode: 'contain',
        marginBottom: 20
    },
})