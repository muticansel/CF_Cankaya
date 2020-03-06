import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, CardItem, Content, Thumbnail, Left, Body, Container, Right, Button, Icon, Badge } from 'native-base'

import Constants from '../../../constants/constants';
import images from '../../../constants/allImages';

const DailyReservations = props => {
    const day = props.navigation.getParam("day");
    const wods = Constants.reservations.find(res => res.day === day).wods

    const renderReservationItem = itemData => {
        return (
            <Container style={{ width: '100%', height: '10%' }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={images["ilaslan"]} />
                                <Body>
                                    <Text>{itemData.item.coach}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Badge info><Text>{itemData.item.participantCount}</Text></Badge>
                                </Button>
                            </Left>
                            {
                                itemData.item.participantCount < 12 &&
                                <Right>
                                    <Button style={{ padding: 10 }} rounded success onPress={() => alert("Clicked")}>
                                        <Icon type="AntDesign" name="check" />
                                    </Button>
                                </Right>
                            }
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    return (
        <View>
            <FlatList numColumns={1} keyExtractor={item => item.hour}
                renderItem={renderReservationItem}
                data={wods} />
        </View>
    )
}

DailyReservations.navigationOptions = navData => {
    return {
        headerTitle: 'Wods of the Day'
    }
}

export default DailyReservations;