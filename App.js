import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackScreen from './routes/loginStackScreen';
import FirstStackScreen from './routes/firstStackScreen';
import LawyerLoginStackScreen from './laywerlogin/laywerroutes/laywerloginStackScreen';
import FirstScreen from './screens/firstscreen';
import Signup_EnterEmail from './screens/Signup/Signup_EnterEmail';
import Signup_ChooseUsername from './screens/Signup/Signup_ChooseUsername';
import Signup_AccountCreated from './screens/Signup/Signup_AccountCreated';
import Signup_ChoosePassword from './screens/Signup/Signup_ChoosePassword';
import Signup_EnterVerificationCode from './screens/Signup/Signup_EnterVerificationCode';
import ForgotPassword_EnterVerificationCode from './screens/ForgotPassword/ForgotPassword_EnterVerificationCode';
import ForgotPassword_EnterEmail from './screens/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_ChoosePassword from './screens/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_AccountRecovered from './screens/ForgotPassword/ForgotPassword_AccountRecovered';
import Settings1 from './screens/Settings/Settings1';
import ChangeDescription from './screens/Settings/ChangeDescription';
import ChangePassword from './screens/Settings/ChangePassword';
import ChangeUsername from './screens/Settings/ChangeUsername';
import EditProfile from './screens/Settings/EditProfile';
import UploadProfilePicture from './screens/Settings/UploadProfilePicture';

//new stacks



const Stack = createNativeStackNavigator(); 
 //hell
export default function App() {
  return (
    <NavigationContainer> 
     
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}>

                <Stack.Screen name="FirstStackScreen" component={FirstStackScreen} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />
                <Stack.Screen name="LaywerLoginStackScreen" component={LawyerLoginStackScreen} />
                <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
                 <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />
                 <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
                <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
                 <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />


                 <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
                <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={ForgotPassword_EnterVerificationCode} />
                <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
                <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} /> 


                <Stack.Screen name="Settings1" component={Settings1} />
                <Stack.Screen name="ChangeDescription" component={ChangeDescription} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="ChangeUsername" component={ChangeUsername} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="UploadProfilePicture" component={UploadProfilePicture} />
                
                {/* new stacks */}


        {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>   
  
);
}

