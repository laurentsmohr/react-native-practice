import React from 'react';
import { DrawerItems, createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import { Home } from './src/screens/Home/Home'
import { SharePlaceScreen as SharePlace }  from './src/screens/SharePlace/SharePlace'
import { AuthLoadingScreen } from './src/screens/AuthLoading/AuthLoading'
import { Auth } from './src/screens/Auth/Auth'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeStack = createStackNavigator({
  Home
})

const ShareStack = createStackNavigator({
  Share: SharePlace
})

const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Share: ShareStack
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Share') {
          iconName = 'ios-share'
        }
        
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray'
    },
  }
)

const AuthStack = createStackNavigator({ 
  SignIn: Auth
});

const Drawer = createDrawerNavigator(
  {
    'Go back': {
      screen: AppStack,
    },
  },
  {
    contentComponent:(props) => (
          <SafeAreaView style={{flex:1}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <TouchableOpacity onPress={()=>{
              // Asyncstorage.clear();
              props.navigation.navigate('Auth')
            }}>
              <Text style={{margin: 16, fontWeight: 'bold', color: 'black'}}>Logout</Text>
            </TouchableOpacity>
          </SafeAreaView>
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: Drawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));