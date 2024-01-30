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

import LawyerSignup_AccountCreated from './laywerlogin/laywerscreens/lawyerSignup/lawyerSignup_AccountCreated';
import LawyerSignup_ChoosePassword from './laywerlogin/laywerscreens/lawyerSignup/lawyerSignup_ChoosePassword';
//new stacks
import LawyerSignup_ChooseUsername from './laywerlogin/laywerscreens/lawyerSignup/lawyerSignup_ChooseUsername';
import LawyerSignup_EnterEmail from './laywerlogin/laywerscreens/lawyerSignup/lawyerSignup_EnterEmail';
import LawyerSignup_EnterVerificationCode from './laywerlogin/laywerscreens/lawyerSignup/lawyerSignup_EnterVerificationCode';
import LawyerForgotPassword_AccountRecovered from './laywerlogin/laywerscreens/lawyerForgotPassword/lawyerForgotPassword_AccountRecovered';
import LawyerForgotPassword_ChoosePassword from './laywerlogin/laywerscreens/lawyerForgotPassword/lawyerForgotPassword_ChoosePassword';
import LawyerForgotPassword_EnterEmail from './laywerlogin/laywerscreens/lawyerForgotPassword/lawyerForgotPassword_EnterEmail';
import LawyerForgotPassword_EnterVerificationCode from './laywerlogin/laywerscreens/lawyerForgotPassword/lawyerForgotPassword_EnterVerificationCode';

import LawyerChangeDescription from './laywerlogin/laywerscreens/lawyerSettings/lawyerChangeDescription';
import LawyerChangePassword from './laywerlogin/laywerscreens/lawyerSettings/lawyerChangePassword';
import LawyerChangeUsername from './laywerlogin/laywerscreens/lawyerSettings/lawyerChangeUsername';
import LawyerEditProfile from './laywerlogin/laywerscreens/lawyerSettings/lawyerEditProfile';
import LawyerUploadProfilePicture from './laywerlogin/laywerscreens/lawyerSettings/lawyerUploadProfilePicture';
import LawyerSettings1 from './laywerlogin/laywerscreens/lawyerSettings/lawyerSettings1';

import LawyerLoginScreen from './laywerlogin/laywerscreens/laywerloginScreen';
import LoginScreen from './screens/loginScreen';
import LawyerOtherLawyerProfile from './laywerlogin/laywerscreens/lawyerotherLawyerProfile';
import LawyerDrawerScreen from './laywerlogin/laywerscreens/laywerdrawer';

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
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="LawyerLoginStackScreen" component={LawyerLoginStackScreen} />
                <Stack.Screen name="LawyerLoginScreen" component={LawyerLoginScreen} />
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
                <Stack.Screen name="LawyerSignup_AccountCreated" component={LawyerSignup_AccountCreated} />
                <Stack.Screen name="LawyerSignup_ChoosePassword" component={LawyerSignup_ChoosePassword} />
                <Stack.Screen name="LawyerSignup_ChooseUsername" component={LawyerSignup_ChooseUsername} />
                <Stack.Screen name="LawyerSignup_EnterEmail" component={LawyerSignup_EnterEmail} />
                <Stack.Screen name="LawyerSignup_EnterVerificationCode" component={LawyerSignup_EnterVerificationCode} />

                <Stack.Screen name="LawyerForgotPassword_EnterEmail" component={LawyerForgotPassword_EnterEmail} />
                <Stack.Screen name="LawyerForgotPassword_EnterVerificationCode" component={LawyerForgotPassword_EnterVerificationCode} />
                <Stack.Screen name="LawyerForgotPassword_ChoosePassword" component={LawyerForgotPassword_ChoosePassword} />
                <Stack.Screen name="LawyerForgotPassword_AccountRecovered" component={LawyerForgotPassword_AccountRecovered} /> 

        {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}

                <Stack.Screen name="LawyerSettings1" component={LawyerSettings1} />
                <Stack.Screen name="LawyerChangeDescription" component={LawyerChangeDescription} />
                <Stack.Screen name="LawyerChangePassword" component={LawyerChangePassword} />
                <Stack.Screen name="LawyerChangeUsername" component={LawyerChangeUsername} />
                <Stack.Screen name="LawyerEditProfile" component={LawyerEditProfile} />
                <Stack.Screen name="LawyerUploadProfilePicture" component={LawyerUploadProfilePicture} />

                <Stack.Screen name="LawyerOtherLawyerProfile" component={LawyerOtherLawyerProfile} />
                <Stack.Screen name="LawyerDrawerScreen" component={LawyerDrawerScreen} />

                

      </Stack.Navigator>
    </NavigationContainer>   
  
);
}

