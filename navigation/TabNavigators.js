import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Colors from '../constants/colors'
import { WodsStackNav, ReservationsStackNav } from './StackNavigators';

const wodsTabScreenConfig = {
    Reservations: {
        screen: ReservationsStackNav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <FontAwesome name="bookmark"
                    size={25}
                    color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary
        }
    },
    Wods: {
        screen: WodsStackNav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <MaterialCommunityIcons name="dumbbell"
                    size={25}
                    color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary
        }
    }
}

export const WodsTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(wodsTabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primary
        }
    })
    : createBottomTabNavigator(wodsTabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accentColor
        }
    })