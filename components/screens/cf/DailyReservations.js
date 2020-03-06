import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, CardItem, Content, Thumbnail, Left, Body, Container, Right, Button, Icon } from 'native-base'

import Constants from '../../../constants/constants';
import images from '../../../constants/allImages';

const DailyReservations = props => {
    const renderReservationItem = itemData => {
        const dayIndex = Constants.days.findIndex(day => day === itemData.item.day);

        return (
            <Container style={{ width: '100%', height: '10%' }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={images["ilaslan"]} />
                                <Body>
                                    <Text>Coach Name</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text> Reser. Num</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button style={{padding: 10}} rounded success onPress={() => alert("Clicked")}>
                                    <Icon type="AntDesign" name="check" />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    return (
        <View>
            <FlatList numColumns={1}
                renderItem={renderReservationItem}
                data={Constants.reservations} />
        </View>
    )
}

DailyReservations.navigationOptions = navData => {
    return {
        headerTitle: 'Wods of the Day'
    }
}

export default DailyReservations;