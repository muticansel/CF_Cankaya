import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Button, DatePicker } from 'native-base';

import * as userActions from '../../../store/actions/user';

const ProfileScreen = props => {
    const userId = useSelector(state => state.authReducer.userId);
    const profiles = useSelector(state => state.userReducer.profiles)
    const profile = profiles.find(prof => prof.userId === userId)

    const dispatch = useDispatch();
    const [name, setName] = useState(profile ? profile.name : '');
    const [surname, setSurname] = useState(profile ? profile.surname : '');
    const [startDate, setStartDate] = useState(profile ? profile.startDate : '')
    const [endDate, setEndDate] = useState(profile ? profile.endDate : '')

    const saveProfile = () => {
        const profile = profiles.find(profile => profile.userId === userId)
        dispatch(userActions.updateProfile(profile.id, name, surname, startDate, endDate));
        props.navigation.navigate("MainScreen")
    }

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
                <DatePicker defaultDate={new Date(startDate)}
                    minimumDate={new Date(2020, 1, 1)}
                    locale={"en"}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "green" }}
                    onDateChange={val => setStartDate(val)}
                    disabled={false}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>End Date</Text>
                <DatePicker defaultDate={endDate ? new Date(endDate) : null}
                    minimumDate={startDate ? new Date(startDate) : undefined}
                    locale={"en"}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "green" }}
                    onDateChange={val => setEndDate(val)}
                    disabled={!startDate}
                />
            </View>
            <Button success block onPress={saveProfile}>
                <Text>Save</Text>
            </Button>
        </View>
    )
}

ProfileScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Profile'
    }
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