import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, CardItem, Content, Left, Body, Container, Button, Icon, Thumbnail } from 'native-base'

import Constants from '../../../constants/constants';
import DrawerButton from '../../UI/HeaderDrawerButton';
import images from '../../../constants/allImages';

const Reservations = props => {
    const renderReservationItem = itemData => {
        const dayIndex = Constants.days.findIndex(day => day === itemData.item.day);
        const wodCount = Constants.reservations.filter(res => res.day === itemData.item.day)[0].wods.length;

        const goToDailyReservation = () => {
            props.navigation.navigate('DailyReservations', {
                day: itemData.item.day
            })
        }

        return (
            <TouchableOpacity onPress={goToDailyReservation}>
                <Container style={{ width: '100%', height: '10%' }}>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={images[`wod${dayIndex}`]} />
                                    <Body>
                                        <Text style={{ fontSize: 26 }}>{itemData.item.day}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon type="FontAwesome" name="bell" />
                                        <Text> {wodCount} Wod</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList numColumns={1}
            renderItem={renderReservationItem}
            data={Constants.reservations} />
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
    }
})

export default Reservations;