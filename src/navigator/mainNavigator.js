import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen015635Navigator from '../features/CopyOfBlankScreen015635/navigator';
import BlankScreen115634Navigator from '../features/BlankScreen115634/navigator';
import BlankScreen015633Navigator from '../features/BlankScreen015633/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen015635: { screen: CopyOfBlankScreen015635Navigator },
BlankScreen115634: { screen: BlankScreen115634Navigator },
BlankScreen015633: { screen: BlankScreen015633Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
