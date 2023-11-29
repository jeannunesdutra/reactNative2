import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import Cadastrar from "./src/pages/Cadastrar/Cadastrar";
import Logar from "./src/pages/Logar";

import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "./src/contexts/auth/auth";

export function AppAuth() {
  const { isLogged, isNewUser } = useContext(AuthContext);

  return <>{isLogged ? <Routes /> : isNewUser ? <Cadastrar/> : <Logar />}</>;
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#00bf6d" />
        <AuthProvider>
          <AppAuth />
        </AuthProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
  },
});
