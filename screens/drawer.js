import React from 'react';
import { View, Text, Button , Image, TouchableHighlight, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import myTabs from './tabRoutes';
import MainScreen from './mainScreen';
import Rehabilation from './Rehabilation';
import LawBot from './lawbot';
import RightStackScreen from '../routes/rightStackScreen';
import LawyerStackScreen from '../routes/laywerStackScreen';
import { AntDesign } from '@expo/vector-icons';

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
function rightsScreen({ navigation }) {
  return (
    <View>
      <Text>rightsScreen</Text>
    </View>
  );
}
function legalaidScreen({ navigation }) {
  return (
    <View>
      <Text>leagalaidScreen</Text>
    </View>
  );
}



const Drawer = createDrawerNavigator();

export default function DrawerScreen({navigation}) {
  return (
      <Drawer.Navigator initialRouteName="MainScreen">
        {/* Add your drawer screens here */}
        <Drawer.Screen name="Home" component={MainScreen} 
                  options={{ headerTitle:  function LogoTitle() {
                    return (
                      <View style={styles.headalign}>
                           <Image
                        style={{ width: 50, height: 50 , }}
                        source={require('../assets/title.gif')}
                      />
                      <Text style={styles.htext}>Kaidee</Text>
                      {/* <Text style={{color:'red', marginLeft:'30%',marginTop:'20'}}
                      onPress={() => navigation.navigate('LoginScreen')}
                      >
                        
                       Logout</Text> */}

                       <AntDesign name="user" size={24} color="white" style={fontSize=30} 
                       onPress={() => navigation.navigate('Settings1')} />
                      </View>
                   
                    );
                  }
                  ,
               
                  headerStyle: {
                    backgroundColor: 'black',
                  },
             
                  headerTintColor: 'skyblue',      
    
                
                }}

        />
        <Drawer.Screen name="rights" component={RightStackScreen} />
        <Drawer.Screen name="legalaid" component={LawyerStackScreen} />
        <Drawer.Screen name="LawBot" component={LawBot} />
        <Drawer.Screen name="Rehabiltation" component={Rehabilation} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />

        {/* Add more screens as needed */}
      </Drawer.Navigator>

  );
}

const styles=StyleSheet.create({
  htext:{
    color:'skyblue',
    fontWeight: 'bold',
    fontSize: 24,
    flexDirection:'row',
    paddingTop:7,
    paddingLeft:20,
    },
    headalign: {
      flexDirection:'row',
    },
    icons1: {
      //color: 'white',
      fontSize: 40,
      marginLeft:'50%'
  },


})