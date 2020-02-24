import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import AuthScreen from '../components/screens/user/AuthScreen';
import MainScreen from '../components/screens/cf/MainScreen';

export const CFNavigator = createStackNavigator({
    CF_Cankaya: MainScreen
}, { 
    defaultNavigationOptions: {
        headerTitleAlign: 'center'
    }
 })

export const AuthStackNavigator = createStackNavigator({
    Auth: AuthScreen
}, { 
    defaultNavigationOptions: {
        headerTitleAlign: 'center'
    }
 })