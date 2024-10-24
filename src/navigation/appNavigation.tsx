import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFirstLaunch } from '../hooks/FirstOpening';
import DashboardScreen from '../screens/Dashboard.screen';
import ContactsScreen from '../screens/Contacts.screen';
import OnBoardingScreen from '../screens/onBoarding.screen';


const Stack = createNativeStackNavigator();

export default function AppNavigation(){

  const isFirstLaunch = useFirstLaunch();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     {isFirstLaunch ?(
    //       <Stack.Screen
    //         name='Onboarding'
    //         component={OnBoardingScreen}
    //         options={{headerShown: false}}
    //       />
    //     ): (
    //       <Stack.Screen
    //     name='Dashboard'
    //     component={DashboardScreen}
    //     options={{headerShown: false}}
    //     />
    //     )}
        
    //     <Stack.Screen
    //     name='Contacts'
    //     component={ContactsScreen}
    //     options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
      <Stack.Screen
        name='Onboarding'
        component={OnBoardingScreen}
      />
      <Stack.Screen
        name='Dashboard'
        component={DashboardScreen}
      />
      <Stack.Screen
        name='Contacts'
        component={ContactsScreen}
      />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

