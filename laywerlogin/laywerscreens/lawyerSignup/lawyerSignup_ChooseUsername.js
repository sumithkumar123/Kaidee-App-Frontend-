import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, hr80, logo1, row } from '../../../screens/CommonCss/pagecss';
import { formbtn, formHead3, formInput, formHead2 } from '../../../screens/CommonCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';
const image="https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg";
const LawyerSignup_ChooseUsername = ({ navigation, route }) => {
    const { email } = route.params
    const [username, setusername] = useState('')

    const [loading, setLoading] = useState(false)


    const handleUsername = () => {
        if (username == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            fetch('http://10.0.2.2:3000/lawchangeusername', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    username: username
                })
            })
                .then(res => res.json()).then(
                    data => {
                        if (data.message === "Username Available") {
                            setLoading(false)
                            alert('Username has been set successfully')
                            navigation.navigate('LawyerSignup_ChoosePassword', { email: email, username: username })
                        }
                        else {
                            setLoading(false)
                            alert("Username not available");
                        }
                    }
                ).catch(err => {
                    console.log(err)
                })

        }
    }

    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={image} style={logo1} />
            <Text style={formHead2}>Choose a Username</Text>
            <TextInput placeholder="Enter a username" style={formInput}
                onChangeText={(text) => setusername(text)}
            />

            {
                loading ? <ActivityIndicator /> :
                    <Text style={formbtn}
                        onPress={() => handleUsername()}
                    >
                        Next
                    </Text>
            }
        </View>
    )
}




export default LawyerSignup_ChooseUsername

const styles = StyleSheet.create({})