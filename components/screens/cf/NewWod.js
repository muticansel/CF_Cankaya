import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DatePicker, Textarea, Form, Item, Content, Container } from 'native-base'
import { HeaderButtons, Item as HeaderItem } from 'react-navigation-header-buttons';

import * as cfActions from '../../../store/actions/cf';
import HeaderButton from '../../UI/HeaderButton';

const NewWod = props => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState('')
    const [wodDetail, setWodDetail] = useState('')

    const submitHandler = useCallback(() => {
        dispatch(cfActions.newWod(startDate, wodDetail))
        props.navigation.goBack();
    }, [dispatch, startDate, wodDetail]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });
    }, [submitHandler]);

    startDateHandler = (val) => {
        setStartDate(val)
    }

    wodDetailHandler = val => {
        setWodDetail(val)
    }

    return (
        <Container>
            <Content padder>
                <Item>
                    <DatePicker
                        locale={"en"}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "green" }}
                        onDateChange={startDateHandler}
                    />
                </Item>
                <Item style={{ width: '100%' }}>
                    <Textarea rowSpan={15} bordered 
                    placeholder="Wod Detail" 
                    style={{ width: '100%' }} 
                    value={wodDetail} 
                    onChangeText={wodDetailHandler} />
                </Item>
            </Content>
        </Container>
    )
}

NewWod.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit');

    return {
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <HeaderItem
                    title="Save"
                    iconName={
                        Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
                    }
                    onPress={submitFn}
                />
            </HeaderButtons>
        )
    }
}

export default NewWod