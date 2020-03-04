import React from 'react';
import { View, Text } from 'react-native';
import { DatePicker } from 'native-base'

import { dayFinder } from '../../../util/utility';

const WodPage = props => {
    const day = dayFinder(props.navigation.getParam('dayIndex'))
    
    return (
        <View>
            <DatePicker defaultDate={day} disabled />
        </View>
    )
}

export default WodPage