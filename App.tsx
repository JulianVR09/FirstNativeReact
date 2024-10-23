import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './src/screens/Contacts';
import DashboardScreen from './src/screens/Dashboard';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Contacts'
        component={ContactsScreen}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack;