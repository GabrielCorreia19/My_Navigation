import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/Pages/Contacts'
import Information from './src/Pages/Information'
import AppContacts from './src/Pages/AppContacts';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='App-Contato' component={AppContacts}/>
      <Tab.Screen name='Contacts' component={Contacts}/>
    </Tab.Navigator>
  )
}

export default function App() { 
  return (
  <NavigationContainer> 
    <Stack.Navigator>
      <Stack.Screen name='AppContacts' component={Tabs} ></Stack.Screen>
      <Stack.Screen name='Information' component={Information}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
    ) 
};

