import React from 'react';
import { Button, View ,Text,StyleSheet,Alert,Pressable,Image,TouchableOpacity,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
    return (
    <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white' }}>
            <View style={styles.main}>
                <View style={styles.bg }>
                    <View><Text onPress={() => navigation.navigate('BailInfo')}>AboutBail</Text></View>
                        <View><Text>BailApplication</Text></View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
function BailInfo({navigation}){
    return(
    <View>
        <View style={styles.bg }>
            <Text  >Regular Bail</Text>
            <View style={{margin:5,flexdirection:'row'}}><Button title= "moreinfo" onPress={() => navigation.navigate('RegularBail')}/></View>

        </View>
        <View style={styles.bg}>
            <Text>Interim Bail</Text>
            <View style={{margin:5}}><Button title= "moreinfo" onPress={() => navigation.navigate('InterimBail')}/></View>
        </View>
        <View style={styles.bg}>    
            <Text >Statutory Bail</Text>
            <View style={{margin:5}}><Button title= "moreinfo" onPress={() => navigation.navigate('StatutoryBail')}/></View> 
        </View>
    </View>

    );
}
function RegularBail({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:15,padding:10,alignContent:'center',justifyContent:'center'}}>Regular bail is frequently issued to an individual who has previously been arrested and detained by police. The accused has the right to be freed from such confinement under Section 437 and Section 439 of the CrPC. So, a regular bail is simply the release of an accused from jail to ensure his attendance at the trial.</Text>
        <View style={{margin:5}}><Button title= "contact" onPress={() => Alert.alert('contact now!!')}/></View>
    </View>
    
    );
}
function InterimBail({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:15,padding:10,alignContent:'center',justifyContent:'center'}}>Interim bail is bail issued for a short period. Interim bail is granted to an accused before the hearing for regular or anticipatory bail.</Text>
    </View>
    
    );
}

function StatutoryBail({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:15,padding:10,alignContent:'center',justifyContent:'center'}}>The remedy of statutory bail, also known as default bail, is distinct from bail obtained in the ordinary procedure under CrPC Sections 437, 438, and 439. As the name implies, statutory bail is given when the police or investigating agency fails to file its report/complaint within a certain time frame.</Text> 
    </View>
    
    );
}

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Bail" component={HomeScreen} />
        <Stack.Screen name="BailInfo" component={BailInfo} />
        <Stack.Screen name="RegularBail" component={RegularBail} />
        <Stack.Screen name="InterimBail" component={InterimBail} />
        <Stack.Screen name="StatutoryBail" component={StatutoryBail} />
    </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    bg:{
    color:'black',
    margin:10,
    padding:10,
    width:250,
    borderColor:"black",
    borderWidth:5,
    backgroundColor:'white',
    alignItems:'center',

    },
  /*image: {
    height: 60,
    width:60,
    borderRadius:30,
    borderWidth:5,

  },*/

    main:{
    backgroundColor:'white',
    }
})

export default function App() {
    return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
    );
}