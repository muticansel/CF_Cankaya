import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import AuthScreen from '../components/screens/user/AuthScreen';
import MainScreen from '../components/screens/cf/MainScreen';
import Profile from '../components/screens/user/Profile';
import Reservations from '../components/screens/cf/Reservations';
import Wods from '../components/screens/cf/Wods';
import WodPage from '../components/screens/cf/WodPage';
import NewWod from '../components/screens/cf/NewWod';

const defaultNavOpt = {
    headerTitleAlign: 'center'
}

export const CFNavigator = createStackNavigator({
    CF_Cankaya: MainScreen
}, {
    defaultNavigationOptions: defaultNavOpt
})

export const ProfileStackNav = createStackNavigator(
    {
        ProfileScreen: Profile
    },
    {
        defaultNavigationOptions: defaultNavOpt
    }
)

export const ReservationsStackNav = createStackNavigator(
    {
        Reservations: Reservations
    },
    {
        defaultNavigationOptions: defaultNavOpt
    }
)

export const WodsStackNav = createStackNavigator(
    {
        Wods: Wods,
        WodDetail: WodPage,
        NewWod: NewWod
    },
    {
        defaultNavigationOptions: defaultNavOpt
    }
)

export const AuthStackNavigator = createStackNavigator({
    Auth: AuthScreen
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center'
    }
})