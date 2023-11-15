// import React from 'react';
// import { Button, View ,Text,StyleSheet,Alert,Image,TouchableOpacity,ScrollView} from 'react-native';
// import Ramachandra from './Ramachandra';
// import Gold from './Gold';
// import Raj from './Raj';
// import Say from './Say';
// import Kha from './Kha';
// // import {openURL} from 'expo-linking';

// export default function lawyersinfo({ navigation }) {
//     return (
//         <ScrollView>
//             <View style={styles.main}>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>  Mr.Ramachandra Martand Hajarnavis </Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Address: 89,shahjahan road,New Delhi</Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Date of designation as senior advocate: 26-3-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Remarks: Retired Judge,Bombay High Court</Text>
//                         <View style={{flex:1,margin:5,textAlign:'center',width:100}} >< Button title= "contact" onPress={() => Alert.alert('contact now!!')}/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}} >Mr. Hari Ramchandra Gokhle</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: Rocky Hill Flats,N.Dabholkar Road,Bombay-6</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 23-7-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>

//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr. G. R. Rajagopaul</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: c-53,south Extn.Part-1,New Delhi</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 3-10-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Dr.V.A.Sayed Muhammed</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: Address not available</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-11-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate General</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr.N.D.Khar Khanis</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: 122,Golf Links,N.D.</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-10-1967</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>
//                 </View>
//         </ScrollView>

// );
// }
// const styles = StyleSheet.create({
//     bg:{
//         color:'black',
//         margin:10,
//         padding:10,
//         width:550,
//         borderColor:"black",
//         borderWidth:5,
//         backgroundColor:'white',
//         alignItems:'center',
        

//     },
//     image: {
//         height: 60,
//         width:60,
//         borderRadius:30,
//         borderWidth:5,
//     },
//     main:{
//         backgroundColor:'white',

//     }
//     })









import React from 'react';
import { Button, View ,Text,StyleSheet,Alert,Pressable,Image,TouchableOpacity,ScrollView} from 'react-native';

export default function Lawyers({navigation}) {
  return (
    <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white', }}>
            <View style={styles.main}>
                <View style={styles.bg }>
                    <TouchableOpacity onPress={() => navigation.navigate('Ramachandra')}>
                        <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Ramchandra_Martand_Hajarnavis.jpg',}}/>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('Ramachandra')} >Mr.Ramachandra Martand Hajarnavis</Text>
                    <View style={{flexDirection:'row',margin:5}}><Button title= "moreinfo" onPress={() => navigation.navigate('Ramachandra')}/></View>
                </View>
                <View style={styles.bg}>
                    <TouchableOpacity onPress={() => navigation.navigate('Gold')}>
                        <Image style={styles.image} source={{uri: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/9/18/w1200X800/KK_Venugopal_PTI.jpg',}}/>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('Gold')}>Mr.Hari Ramachandra Gokhle</Text>
                    <View style={{flexDirection:'row',margin:5}}><Button title= "moreinfo" onPress={() => navigation.navigate('Ramachandra')}/></View>
                
                </View>
                <View style={styles.bg}>
                    <TouchableOpacity onPress={() => navigation.navigate('Raj')}>
                        <Image style={styles.image} source={{uri: 'https://www.blackstonechambers.com/images/JM5_5413.2e16d0ba.fill-600x440.jpg',}}/>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('Raj')}>Mr.G.R.Rajagopaul</Text>
                    <View style={{flexDirection:'row',margin:5}}><Button title= "moreinfo" onPress={() => navigation.navigate('Ramachandra')}/></View>
                </View>
                <View style={styles.bg}>
                    <TouchableOpacity onPress={() => navigation.navigate('Say')}>
                        <Image style={styles.image} source={{uri: 'https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/05/28/Incoming/Pictures/1352143_Wallpaper2.jpg',}}/>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('Say')}>Dr.V.A.Sayed Muhammed</Text>
                    <View style={{flexDirection:'row',margin:5}}><Button title= "moreinfo" onPress={() => navigation.navigate('Ramachandra')}/></View>
                </View>
                <View style={styles.bg}>
                    <TouchableOpacity onPress={() => navigation.navigate('Kha')}>
                        <Image style={styles.image} source={{uri: 'https://qph.cf2.quoracdn.net/main-qimg-2d3a21c67e4ccf0edac401191f330e3e',}}/>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('Kha')}>Mr.N.D.Khar Khanis</Text>
                    <View style={{flexDirection:'row',margin:5}}><Button title= "moreinfo" onPress={() => navigation.navigate('Ramachandra')}/></View>
                </View>
            </View>
        </View>
        </ScrollView>

    


    
 );
}



const styles = StyleSheet.create({
  bg:{
      color:'black',
      margin:10,
      padding:10,
      width:550,
      borderColor:"black",
      borderWidth:5,
      backgroundColor:'white',
      alignItems:'center',
      

  },
  image: {
      height: 60,
      width:60,
      borderRadius:30,
      borderWidth:5,
  },
  main:{
      backgroundColor:'black',

  }
  })


