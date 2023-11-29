import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/contexts/auth/auth";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#00bf6d" />
        <AuthProvider>
          <Routes />
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
