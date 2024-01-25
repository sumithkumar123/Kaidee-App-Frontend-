import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
// import { containerFull, goback, hr80, logo1, row } from 'screens/CommonCss\pagecss.js'
import { containerFull, goback, hr80, logo1, row } from '../../../screens/CommonCss/pagecss';
import { formbtn, formHead3, formInput, formHead2 } from '../../../screens/CommonCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const image={uri:"https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg"};
const LawyerSignup_AccountCreated = ({ navigation }) => {
    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('lawyerLoginScreen')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={image} style={logo1} />


            <View style={row}>
                <MaterialCommunityIcons name="check-decagram" size={30} color="#99B83C" />
                <Text style={formHead2}> Account Created Successfully</Text>
            </View>

            <Text style={formbtn}
                onPress={() => navigation.navigate('lawyerLoginScreen')}
            >
                Let's Roll
            </Text>
        </View>
    )
}


export default LawyerSignup_AccountCreated

const styles = StyleSheet.create({})