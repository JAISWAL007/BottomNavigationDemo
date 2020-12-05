import 'react-native-gesture-handler';

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home Screen',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarLabel: 'Setting Screen',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile Screen',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
