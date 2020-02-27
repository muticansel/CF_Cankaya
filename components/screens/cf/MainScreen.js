import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux'
import CategoryGrid from '../../UI/CategoryGrid';

import Constants from '../../../constants/constants';
import DrawerButton from '../../UI/HeaderDrawerButton';
// import DefaultText from '../../UI/DefaultText';
import Colors from '../../../constants/colors';
import * as userActions from '../../../store/actions/user';


const MainScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    const loadProfiles = useCallback(async () => {
        setIsLoading(true);
        await dispatch(userActions.fetchProfiles())
        setIsLoading(false);
    }, [dispatch, setIsLoading])

    useEffect(() => {
        loadProfiles()
    }, [dispatch, loadProfiles])

    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadProfiles);

        return () => {
            willFocusSub.remove()
        }
    }, [loadProfiles])

    const renderGridItem = itemData => {
        return (
            <CategoryGrid title={itemData.item.name}
                color={itemData.item.color}
                onSelect={() => props.navigation.navigate(itemData.item.name)} />
        )
    }

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        )
    }

    return (
        <FlatList numColumns={2}
            data={Constants.menus}
            renderItem={renderGridItem} />
    )
}

MainScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Welcome!',
        headerLeft: () =>
            <DrawerButton toggleDrawerHandler={() => {
                navData.navigation.toggleDrawer()
            }} />
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default MainScreen;