// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// const image = { uri: "https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg" }

// const lawyerLoginScreen = ({ navigation }) => {

//     const [fdata, setFdata] = useState({
//         name: '',
//         email: '',
//         password: '',
//         cpassword: '',
//         dob: '',
//     })

//     const [errormsg, setErrormsg] = useState(null);
//     const [hidePassword, setHidePassword] = useState(true);

//     const Sendtobackend = () => {
//         console.log(fdata);
//         // Commenting out the backend code for now
//         /*
//         if (
//             fdata.email == '' ||
//             fdata.password == ''
//         ) {
//             setErrormsg('All fields are required');
//             return;
//         } else {
//             fetch('http://10.0.2.2:3000/signin', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(fdata)
//             })
//                 .then(res => res.json()).then(
//                     data => {
//                         if (data.error) {
//                             setErrormsg(data.error);
//                         } else {
//                             alert('Logged in successfully');
//                             navigation.navigate('DrawerScreen');
//                         }
//                     }
//                 )
//         }
//         */
//     }

//     return (
//         <ImageBackground
//             source={image}
//             resizeMode='cover'
//             style={styles.backgroundImage}
//         >
//             <View style={styles.container}>
//                 <Text style={styles.title}>UNDERTRIAL PRISONERS</Text>
//                 <View style={styles.content}>
//                     <Text style={styles.hea}></Text>
//                     {
//                         errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
//                     }
//                     <TextInput
//                         style={styles.inp}
//                         placeholder="email"
//                         onPressIn={() => setErrormsg(null)}
//                         onChangeText={(text) => setFdata({ ...fdata, email: text })}
//                         keyboardType="email-address"
//                         autoCapitalize="none"
//                     />
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                             style={styles.inp}
//                             placeholder="Password"
//                             secureTextEntry={hidePassword}
//                             hidePassword={hidePassword}
//                             setHidePassword={setHidePassword}
//                             onPressIn={() => setErrormsg(null)}
//                             onChangeText={(text) => setFdata({ ...fdata, password: text })}
//                         />
//                         <TouchableOpacity
//                             style={styles.eyeIcon}
//                             onPress={() => setHidePassword(!hidePassword)}
//                         >
//                             <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color="#808080" />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.butt}>
//                         <Text style={styles.forgotPassword}>Forgot Password?</Text>
//                         {/* <TouchableOpacity */}
//                             {/* onPress={() => { */}
//                                 {/* Sendtobackend(); */}
//                             {/* }} */}
//                         {/* > */}
//                             <Text style={{ ...styles.login, backgroundColor: 'grey', height: 'auto' }} onPress={() => navigation.navigate('lawyerDrawerScreen')}>Login</Text>
//                         {/* </TouchableOpacity> */}
//                         <Text onPress={() => navigation.navigate('lawyerSignUpScreen')}>Don't have an account? Sign up here</Text>
//                     </View>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// };


//     const styles = StyleSheet.create({
//       backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover', 
//       },
//       container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.3)', 
//       },
//       passwordContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//       },
    
//       title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginTop: 50, 
//         color: '#fff',
//       },
//       content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       hea: {
//         fontSize: 30,
//         fontFamily: 'Roboto',
//         marginBottom: 30,
//         color: '#fff',
//       },
//       inp: {
//         borderRadius: 5,
//         borderWidth: 2,
//         height: 40,
//         width: 300,
//         padding: 10,
//         marginVertical: 10,
//         borderColor: '#ccc',
//         backgroundColor: '#fff',
//         color: '#333', 
//       },
//       butt: {
//         width: 200,
//         marginVertical: 20,
//         flexDirection:'column',
//         color:'#fff',
//       },
//       forgotPassword: {
//        // color: '#3498db',
//         fontSize: 16,
//         marginBottom: 20,
//         color: '#fff',
//         flexDirection:'end',
//       },
//       signupContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//       },
//       bothea: {
//         fontSize: 16,
//         marginRight: 5,
//         color: '#fff',
//       },
//       login:{
//         textAlign:'center',
//         fontSize:22,
//         padding:10,
//         backgroundColor:'white',
//         color:'white',
//       },
//       signupText: {
//         fontSize: 16,
//         color: '#fff',
//       },
    
//       eyeIcon: {
//         position: 'absolute',
//         right: 15,
//       //  color:'black'
//       },
    
//       errormessage: {
//         color: 'red',
//       },
    
    
// });





// export default lawyerLoginScreen;
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacityStyleSheet, Image,TouchableOpacity, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const image = { uri: "https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg" }


// const  lawyerLoginScreen = ({ navigation }) => {
//   const [email, setEmail] = React.useState('')
//     const [password, setPassword] = React.useState('')
//     const [loading, setLoading] = React.useState(false)
//     const [errormsg, setErrormsg] = useState(null);
//     const [hidePassword, setHidePassword] = useState(true);

//     const handleLogin = () => {
//         if (email == '' || password == '') {
//             alert('Please enter email and password')
//         }
//         else {
//             setLoading(true)
//             fetch('http://10.0.2.2:3000/lawsignin', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     email,
//                     password
//                 })
//             })
//                 .then(res => res.json())
//                 .then(async data => {
//                     if (data.error) {
//                         setLoading(false)
//                         alert(data.error)
//                     }
//                     else if (data.message == 'Successfully Signed In') {
//                         setLoading(false)
//                         await AsyncStorage.setItem('user', JSON.stringify(data))
//                         navigation.navigate('lawyerDrawerScreen', { data })
//                     }
//                 })
//                 .catch(err => {
//                     setLoading(false)
//                     alert(err)
//                 })
//         }
//       }

   
//     return (
//         <ImageBackground
//             source={image}
//             resizeMode='cover'
//             style={styles.backgroundImage}
//         >
//             <View style={styles.container}>
//                 <Text style={styles.title}>LAWYERS</Text>
//                 <View style={styles.content}>
//                     <Text style={styles.hea}></Text>
//                     {
//                         errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
//                     }
//                     <TextInput
//                         style={styles.inp}
//                         placeholder="email"
//                         onPressIn={() => setErrormsg(null)}
//                         onChangeText={(text) => setEmail(text)}
//                        // onChangeText={(text) => setFdata({ ...fdata, email: text })}
//                         keyboardType="email-address"
//                         autoCapitalize="none"
//                     />
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                             style={styles.inp}
//                             placeholder="Password"
//                             //secureTextEntry={hidePassword}
//                             hidePassword={hidePassword}
//                             setHidePassword={setHidePassword}
//                             secureTextEntry={true}
//                 onChangeText={(text) => setPassword(text)}
//                             onPressIn={() => setErrormsg(null)}
// //onChangeText={(text) => setFdata({ ...fdata, password: text })}
//                         />
//                         <TouchableOpacity
//                             style={styles.eyeIcon}
//                             onPress={() => setHidePassword(!hidePassword)}
//                         >
//                             <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color="#808080" />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.butt}>
//                         <Text style={styles.forgotPassword}>Forgot Password?</Text>

//                             {
//                 loading ?
//                     <ActivityIndicator size="large" color="white" />
//                     :
//                     <Text style={{ ...styles.login, backgroundColor: 'grey', height: 'auto' }} onPress={
//                         () => handleLogin()
//                     }>
//                         Submit
//                     </Text>
//             }
//                         {/* </TouchableOpacity> */}
//                         <Text onPress={() => navigation.navigate('LawyerSignup_EnterEmail')}>Don't have an account? Sign up here</Text>
//                     </View>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// };


//     const styles = StyleSheet.create({
//       backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover', 
//       },
//       container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.3)', 
//       },
//       passwordContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//       },
    
//       title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginTop: 50, 
//         color: '#fff',
//       },
//       content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       hea: {
//         fontSize: 30,
//         fontFamily: 'Roboto',
//         marginBottom: 30,
//         color: '#fff',
//       },
//       inp: {
//         borderRadius: 5,
//         borderWidth: 2,
//         height: 40,
//         width: 300,
//         padding: 10,
//         marginVertical: 10,
//         borderColor: '#ccc',
//         backgroundColor: '#fff',
//         color: '#333', 
//       },
//       butt: {
//         width: 200,
//         marginVertical: 20,
//         flexDirection:'column',
//         color:'#fff',
//       },
//       forgotPassword: {
//        // color: '#3498db',
//         fontSize: 16,
//         marginBottom: 20,
//         color: '#fff',
//         flexDirection:'row',
//       },
//       signupContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//       },
//       bothea: {
//         fontSize: 16,
//         marginRight: 5,
//         color: '#fff',
//       },
//       login:{
//         textAlign:'center',
//         fontSize:22,
//         padding:10,
//         backgroundColor:'white',
//         color:'white',
//       },
//       signupText: {
//         fontSize: 16,
//         color: '#fff',
//       },
    
//       eyeIcon: {
//         position: 'absolute',
//         right: 15,
//       //  color:'black'
//       },
    
//       errormessage: {
//         color: 'red',
//       },
    
    
// });

// export default  lawyerLoginScreen;










import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator} from 'react-native'
import React from 'react'
import { containerFull, hr80, logo1 } from '../../screens/CommonCss/pagecss';
import { formbtn, formHead, formInput, formTextLinkCenter, formTextLinkRight } from '../../screens/CommonCss/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image={uri:"https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg"};

const LawyerLoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleLogin = () => {
        if (email == '' || password == '') {
            alert('Please enter email and password')
        }
        else {
            setLoading(true)
            fetch('http://10.0.2.2:3000/lawsignin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
                .then(res => res.json())
                .then(async data => {
                    if (data.error) {
                        setLoading(false)
                        alert(data.error)
                    }
                    else if (data.message == 'Successfully Signed In') {
                        setLoading(false)
                        await AsyncStorage.setItem('user', JSON.stringify(data))
                        navigation.navigate('LawyerDrawerScreen', { data })
                    }
                })
                .catch(err => {
                    setLoading(false)
                    alert(err)
                })
        }
        // navigation.navigate('MainPage')
    }
    return (
        <View style={containerFull}>
            <Image source={image} style={logo1} />
            <Text style={formHead}>Login</Text>
            <TextInput placeholder="Enter Your Email" style={formInput}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput placeholder="Enter Your Password" style={formInput}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <Text style={formTextLinkRight}
                onPress={() => navigation.navigate('LawyerForgotPassword_EnterEmail')}
            >Forgot Password?</Text>

            {
                loading ?
                    <ActivityIndicator size="large" color="black" />
                    :
                    <Text style={formbtn} onPress={
                        () => handleLogin()
                    }>
                        Submit
                    </Text>
            }


            <View style={hr80}></View>


            <Text style={formTextLinkCenter}>
                Don't have an account? <Text style={{ color: 'black' }}
                    onPress={() => navigation.navigate('LawyerSignup_EnterEmail')}
                >Signup</Text>
            </Text>

        </View>
    )
}

export default LawyerLoginScreen

const styles = StyleSheet.create({})