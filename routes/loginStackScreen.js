import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
//import SignupScreen from '../screens/signUpScreen';
import DrawerScreen from '../screens/drawer';
import OtherLawyerProfile from '../screens/otherLawyerProfile';
import MessagePage from '../screens/MessagePage';
// import signUpStackScreen from './signUpStackScreen';
// import ForgotPasswordStackScreen from './forgotPasswordStackScreen';
// import Signup_AccountCreated from '../screens/Signup/Signup_AccountCreated';
// import Signup_ChoosePassword from '../screens/Signup/Signup_ChoosePassword';
// import Signup_ChooseUsername from '../screens/Signup/Signup_ChooseUsername';
// import Signup_EnterEmail from '../screens/Signup/Signup_EnterEmail';
// import Signup_EnterVerificationCode from '../screens/Signup/Signup_EnterVerificationCode';
// import ForgotPassword_AccountRecovered from '../screens/ForgotPassword/ForgotPassword_AccountRecovered';
// import ForgotPassword_ChoosePassword from '../screens/ForgotPassword/ForgotPassword_ChoosePassword';
// import ForgotPassword_EnterEmail from '../screens/ForgotPassword/ForgotPassword_EnterEmail';
// import ForgotPassword_EnterVerificationCode from '../screens/ForgotPassword/ForgotPassword_EnterVerificationCode';

const LoginStack = createNativeStackNavigator();

export default function LoginStackScreen() {
  return (
    <LoginStack.Navigator >
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} 
      options={{ headerShown: false }} />
        <LoginStack.Screen name="DrawerScreen" component={DrawerScreen} 
      options={{ headerShown: false }} />
   {/* <LoginStack.Screen name="signUpStackScreen" component={signUpStackScreen} 
      options={{ headerShown: false }} /> */}
  <LoginStack.Screen name="MessagePage" component={MessagePage} 
      options={{ headerShown: false }} />
  <LoginStack.Screen name="OtherLawyerProfile" component={OtherLawyerProfile} 
      options={{ headerShown: false }} />
 
  {/* <LoginStack.Screen name="ForgotPasswordStackScreen" component={ForgotPasswordStackScreen} 
      options={{ headerShown: false }} /> */}

          {/* <LoginStack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
                <LoginStack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />
                <LoginStack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
                <LoginStack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
                <LoginStack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />
                <LoginStack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
                <LoginStack.Screen name="ForgotPassword_EnterVerificationCode" component={ForgotPassword_EnterVerificationCode} />
                <LoginStack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
                <LoginStack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} /> */}

    </LoginStack.Navigator>
  );
}