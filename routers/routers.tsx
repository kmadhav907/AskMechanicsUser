import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SpalshScreen from '../screens/SplashScreen';
import { LOGINSCREEN, SPLASHSCREEN } from '../constants/navigations';
import LoginScreen from '../screens/LoginScreen';


const Routers = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SPLASHSCREEN}>
        <Stack.Screen
          name={SPLASHSCREEN}
          component={SpalshScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={LOGINSCREEN} component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routers;