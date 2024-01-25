import React from 'react';
import { View, Text, Button , Image, TouchableHighlight, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import lawyerStackScreen from '../laywerroutes/laywerlaywerStackScreen';
import lawyerMainScreen from './laywermainScreen';

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

export default function lawyerDrawerScreen({navigation}) {
  return (
      <Drawer.Navigator initialRouteName="lawyerMainScreen">
        {/* Add your drawer screens here */}
        <Drawer.Screen name="Home" component={lawyerMainScreen} 
                  options={{ headerTitle:  function LogoTitle() {
                    return (
                      <View style={styles.headalign}>
                           <Image
                        style={{ width: 50, height: 50 , }}
                        source={require('../assets/title.gif')}
                      />
                      <Text style={styles.htext}>Kaidee</Text>
                      {/* <Text style={{color:'red', marginLeft:'30%',marginTop:'20'}}
                      onPress={() => navigation.navigate('lawyerLoginScreen')}
                      >
                        
                       Logout</Text> */}
                       <AntDesign name="user" size={24} color="white" style={icons1} onPress
                    ={
                        () => navigation.navigate('LawyerSettings1')
                    } />
                

                  
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
        <Drawer.Screen name="legalaid" component={lawyerStackScreen} />
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
    }

})