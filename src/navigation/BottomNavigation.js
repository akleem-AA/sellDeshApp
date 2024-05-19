import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreens/Home';
import Tudo from '../screens/homeScreens/Tudo';

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Tudo1" component={Tudo} />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})