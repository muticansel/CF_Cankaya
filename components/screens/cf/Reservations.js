import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { Card, CardItem, Content, Left, Body, Container, Button, Icon } from 'native-base'

import Constants from '../../../constants/constants';
import DrawerButton from '../../UI/HeaderDrawerButton';


const Reservations = props => {
    const renderReservationItem = itemData => {
        return (
            <Container style={{ width: '100%', height: '10%' }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                {/* <Thumbnail source={{ uri: '' }} /> */}
                                <Body>
                                    <Text style={{ fontSize: 26 }}>{itemData.item.day}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon type="FontAwesome" name="bell" />
                                    <Text> 5 Wod(Wod Count)</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
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