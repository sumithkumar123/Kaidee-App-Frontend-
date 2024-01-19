import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
const image="https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg";
const Signup_ChooseUsername = ({ navigation, route }) => {
    const { email } = route.params
    const [username, setusername] = useState('')

    const [loading, setLoading] = useState(false)


    const handleUsername = () => {
        if (username == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            fetch('http://10.0.2.2:3000/changeusername', {
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
                            navigation.navigate('Signup_ChoosePassword', { email: email, username: username })
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

        // navigation.navigate('Signup_ChoosePassword')
    }

    return (
        <View style={styles.containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={image} style={styles.logo1} />
            <Text style={styles.formHead2}>Choose a Username</Text>
            <TextInput placeholder="Enter a username" style={styles.formInput}
                onChangeText={(text) => setusername(text)}
            />

            {
                loading ? <ActivityIndicator /> :
                    <Text style={styles.formbtn}
                        onPress={() => handleUsername()}
                    >
                        Next
                    </Text>
            }
        </View>
    )
}




export default Signup_ChooseUsername

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
})