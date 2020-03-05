import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';

import MainNav from './navigation/MainNavigator';
import authReducer from './store/reducers/auth';
import userReducer from './store/reducers/user';
import cfReducer from './store/reducers/cf';

enableScreens();

const rootReducer = combineReducers({
  //filmReducer: filmReducer,
  authReducer: authReducer,
  userReducer: userReducer,
  cfReducer: cfReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)} />
    )
  }

  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
