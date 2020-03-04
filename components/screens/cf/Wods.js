import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, CardItem } from 'native-base'

import Constants from '../../../constants/constants';
import DrawerButton from '../../UI/HeaderDrawerButton';
import Colors from '../../../constants/colors';

const Wods = props => {
    const goToWodDetail = (ind) => {
        props.navigation.navigate('WodDetail', {
            dayIndex: ind
        })
    }

    return (
        <View style={styles.mainContainer}>
            {Constants.reservations.map((wod, index) => {
                return (
                    <Card style={styles.cardStyle} key={wod.day}>
                        <CardItem style={styles.cardItem} button onPress={() => goToWodDetail((index+1) % 7)} >
                            <Text>{wod.day}</Text>
                        </CardItem>
                    </Card>
                )
            })}
        </View>
    )
}

Wods.navigationOptions = navData => {
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

export default Wods;