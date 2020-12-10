import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen015637Navigator from '../features/CopyOfBlankScreen015637/navigator';
import CopyOfCopyOfBlankScreen015636Navigator from '../features/CopyOfCopyOfBlankScreen015636/navigator';
import BlankScreen115634Navigator from '../features/BlankScreen115634/navigator';
import BlankScreen015633Navigator from '../features/BlankScreen015633/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen015637: { screen: CopyOfBlankScreen015637Navigator },
CopyOfCopyOfBlankScreen015636: { screen: CopyOfCopyOfBlankScreen015636Navigator },
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
