import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const DayGrid = props => {
    return (
        <TouchableOpacity style={styles.gridContainer}
            onPress={props.onSelect}>
            <View style={{...styles.category, ...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        margin: 15,
        borderRadius: 10
    },
    category: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
})

export default DayGrid;