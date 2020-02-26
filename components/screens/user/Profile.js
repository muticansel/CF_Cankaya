import React, { useEffect, useCallback, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, Button, DatePicker } from 'native-base'

const ProfileScreen = props => {
    const user = undefined

    const dispatch = useDispatch();
    const [name, setName] = useState(user ? user.name : '');
    const [surname, setSurname] = useState(user ? user.surname : '');
    const [startDate, setStartDate] = useState(user ? user.startDate : '')
    const [endDate, setEndDate] = useState(user ? user.endDate : '')

    const submitHandler = useCallback(() => {
        if (editedMeal) {
            // dispatch(
            //     userActions.updateMeal(mealId, title, duration, [category], ingredients, steps)
            // );
        } else {
            // dispatch(
            //     mealActions.createMeal(title, duration, [category], ingredients, steps, "")
            // );
        }
        props.navigation.goBack();
    }, [dispatch, name, surname]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });
    }, [submitHandler]);

    return (
        <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Surname</Text>
                <TextInput
                    style={styles.input}
                    value={surname}
                    onChangeText={text => setSurname(text)}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Start Date</Text>
                <DatePicker defaultDate={startDate}
                    minimumDate={new Date(2020, 1, 1)}
                    locale={"en"}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "green" }}
                    onDateChange={val => setStartDate(val)}
                    disabled={false}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>End Date</Text>
                <DatePicker defaultDate={endDate}
                    minimumDate={startDate}
                    locale={"en"}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={!startDate ? "First select start date" : "Select date"}
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "green" }}
                    onDateChange={val => setEndDate(val)}
                    disabled={!startDate}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
})

export default ProfileScreen;