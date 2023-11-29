import Home from './pages/Home/Home'
import Despesa from "./pages/NovaDespesa/NovaDespesa";
import Cadastrar from './pages/Cadastrar/Cadastrar';
import Logar from './pages/Logar';
import Welcome from './pages/Welcome';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function Routes(){
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name="Logar" component={Logar} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen options={{ headerShown: false }} name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Nova despesa" component={Despesa} />
      </Stack.Navigator>
    );
}