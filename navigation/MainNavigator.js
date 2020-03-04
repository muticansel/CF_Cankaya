import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthStackNavigator } from './StackNavigators';
import { CfCankayaNav } from './DrawerNavigator';
import StartupScreen from '../components/screens/StartupScreen';

const SwitchNavigator = createSwitchNavigator({
    StartupScreen: StartupScreen,
    Auth: AuthStackNavigator,
    CFCankaya: CfCankayaNav
})

export default createAppContainer(SwitchNavigator);