// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreens/Home';
import Tudo from '../screens/homeScreens/Tudo';
import BottomNavigation from './BottomNavigation';
import Testing from '../screens/Testing';



const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Tudo" component={Tudo} />
                <Stack.Screen name="jishan" component={Testing} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;