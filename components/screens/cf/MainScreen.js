import React, { useState } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View, Button } from 'react-native';
import { useDispatch } from 'react-redux'
import CategoryGrid from '../../UI/CategoryGrid';

import Constants from '../../../constants/constants';
import DrawerButton from '../../UI/HeaderDrawerButton';
// import DefaultText from '../../UI/DefaultText';
import Colors from '../../../constants/colors';


const MainScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    // const loadFilms = useCallback(async () => {
    //     setIsLoading(true);
    //     await dispatch(filmActions.fetchFilms())
    //     setIsLoading(false);
    // }, [dispatch, setIsLoading])

    // useEffect(() => {
    //     loadFilms()
    // }, [dispatch, loadFilms])

    // useEffect(() => {
    //     const willFocusSub = props.navigation.addListener('willFocus', loadFilms);

    //     return () => {
    //         willFocusSub.remove()
    //     }
    // }, [loadFilms])

    const renderGridItem = itemData => {
        return (
            <CategoryGrid title={itemData.item.name}
                color={itemData.item.color}
                onSelect={() => props.navigation.navigate('Profile')} />
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