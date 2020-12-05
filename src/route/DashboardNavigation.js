import 'react-native-gesture-handler';
import * as React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  // Structure for the navigation Drawer
  const toggleDrawer = () => {
    // Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={styles.parentHeaderStyle}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*dot Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'DashboardScreen':
      return 'Home';
    case 'Settings':
      return 'Settings';
    case 'Profile':
      return 'Profile';
  }
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="DashboardScreen">
      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  parentHeaderStyle: {flexDirection: 'row'},
});

export default HomeScreenStack;
