import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, CardItem } from 'native-base'

import Constants from '../../../constants/constants';
import DrawerButton from '../../UI/HeaderDrawerButton';
import Colors from '../../../constants/colors';

const Reservations = props => {
    return (
        <View style={styles.mainContainer}>
            {Constants.reservations.map(wod => {
                return (
                    <Card style={styles.cardStyle} key={wod.day}>
                        <CardItem style={styles.cardItem} button onPress={() => props.navigation.navigate('Profile')} >
                            <Text>{wod.day}</Text>
                        </CardItem>
                    </Card>
                )
            })}
        </View>
    )
}

Reservations.navigationOptions = navData => {
    return {
        headerLeft: () => <DrawerButton toggleDrawerHandler={() => {
            navData.navigation.toggleDrawer()
        }} />
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardStyle: {
        width: '95%',
        borderWidth: 1,
        borderRadius: 20
    },
    cardItem: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20
    }
})

export default Reservations;