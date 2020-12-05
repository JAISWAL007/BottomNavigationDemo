import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenStack from './DashboardNavigation';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="Dashboard"
          component={HomeScreenStack}
          options={{drawerLabel: 'Home Screen'}}
        />
        <Drawer.Screen
          name="ProfileDrawer"
          options={{drawerLabel: 'Profile Screen'}}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingDrawer"
          options={{drawerLabel: 'Setting Screen'}}
          component={HomeScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Route;
