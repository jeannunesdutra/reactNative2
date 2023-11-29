import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './pages/Home/Home'
import Money from "./pages/Money/Money";
import Despesa from "./pages/NovaDespesa/NovaDespesa";
import Cadastrar from './pages/Cadastrar/Cadastrar';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function Routes(){
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Money" component={Money} />
        <Stack.Screen name="Nova despesa" component={Despesa} />
      </Stack.Navigator>
    );
}