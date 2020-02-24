import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthStackNavigator } from './StackNavigators';
import { AppBaseDrawerNav } from './DrawerNavigator';

const SwitchNavigator = createSwitchNavigator({
    Auth: AuthStackNavigator,
    CFCankaya: AppBaseDrawerNav
})

export default createAppContainer(SwitchNavigator);