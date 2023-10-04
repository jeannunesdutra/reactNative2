import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar style="light" backgroundColor="#00bf6d" />
      </View>



      <Routes />
    </NavigationContainer>
  );
}
