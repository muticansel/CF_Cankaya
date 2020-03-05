import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, CardItem } from 'native-base';
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../UI/HeaderButton';

import Constants from '../../../constants/constants';
import DrawerButton from '../../UI/HeaderDrawerButton';
import Colors from '../../../constants/colors';

const Wods = props => {
    const userProfile = useSelector(state => state.userReducer.userProfile);

    const goToWodDetail = (ind) => {
        props.navigation.navigate('WodDetail', {
            dayIndex: ind
        })
    }

    useEffect(() => {
        props.navigation.setParams({ userProfile: userProfile });
    }, [userProfile]);

    return (
        <View style={styles.mainContainer}>
            {Constants.reservations.map((wod, index) => {
                return (
                    <Card style={styles.cardStyle} key={wod.day}>
                        <CardItem style={styles.cardItem} button onPress={() => goToWodDetail((index + 1) % 7)} >
                            <Text>{wod.day}</Text>
                        </CardItem>
                    </Card>
                )
            })}
        </View>
    )
}

Wods.navigationOptions = navData => {
    const userProfile = navData.navigation.getParam('userProfile');

    return {
        headerLeft: () => <DrawerButton toggleDrawerHandler={() => {
            navData.navigation.toggleDrawer()
        }} />,
        headerRight: () => (userProfile && userProfile.isAdmin) ? (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName={
                        Platform.OS === 'android' ? 'ios-add' : 'ios-add-circle'
                    }
                    onPress={() => {
                        navData.navigation.navigate('NewWod')
                    }}
                />
            </HeaderButtons>
        ) : null
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