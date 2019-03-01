import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
// Components
// import DrawerNavigator from '../components/drawer/DrawerNavigator';
// Screens
import { Welcome, Another } from '../screens';

// Home Stack Navigator
const AppHomeStackNavigator = createStackNavigator({
  Welcome,
  Another
});

// Profile Stack Navigator
// const AppProfileStackNavigator = createStackNavigator({
//   Profile,
//   UserProfile,
//   UpdateProfile
// });

// App Drawer Navigator
// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: AppHomeStackNavigator
//     },
//     Profile: {
//       screen: AppProfileStackNavigator
//     }
//   },
//   {
//     drawerPosition: 'left',
//     drawerType: 'slide',
//     drawerWidth: 400,
//     contentComponent: DrawerNavigator,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToogleRoute: 'DrawerToggle'
//   }
// );

// App Switch Navigator
// const AppSwitchNavigator = createSwitchNavigator({
//   Splash,
//   AuthMethod,
//   Signin,
//   Signup,
//   AppDrawerNavigator
// });

// App Container
const AppContainer = createAppContainer(AppHomeStackNavigator);

export default AppContainer;
