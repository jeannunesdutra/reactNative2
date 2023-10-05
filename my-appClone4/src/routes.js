import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './pages/Home/Home'
import Money from "./pages/Money/Money";
import Store from "./pages/Store/Store";
import CustomTabBar from './components/CustomTabBar';

const Tab = createBottomTabNavigator();

export function Routes(){
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
       
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Money"
          component={Money}
        />
        <Tab.Screen
          name="Store"
          component={Store}
        />
      </Tab.Navigator>
      
    );
}