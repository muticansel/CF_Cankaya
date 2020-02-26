import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthStackNavigator } from './StackNavigators';
import { CfCankayaNav } from './DrawerNavigator';

const SwitchNavigator = createSwitchNavigator({
    Auth: AuthStackNavigator,
    CFCankaya: CfCankayaNav
})

export default createAppContainer(SwitchNavigator);