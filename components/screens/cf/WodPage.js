import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DatePicker, Textarea, Card, CardItem } from 'native-base'

import { dayFinder } from '../../../util/utility';

const WodPage = props => {
    const day = dayFinder(props.navigation.getParam('dayIndex'))

    return (
        <View>
            <Card style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
                <CardItem header style={{justifyContent: 'center'}}>
                    <DatePicker defaultDate={day} textStyle={{ color: "red" }} disabled />
                </CardItem>
                <CardItem style={{justifyContent: 'center'}}>
                    <Textarea>Detay</Textarea>
                </CardItem>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WodPage