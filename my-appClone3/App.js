import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import Detalhe from "./src/components/Detalhe/Data";
import Home from "./src/pages/Home/Home";
import { Ionicons } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#00bf6d" />
      <Home />

      <View style={styles.footerMenu}>
        <View style={styles.div1}>
          <View style={styles.buttonHome}>
            <TouchableOpacity onPress={() => alert("Retrocedeu")}>
              <Ionicons name="home-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonChart}>
            <TouchableOpacity onPress={() => alert("Avançou")}>
              <Ionicons name="pie-chart-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.div2}>
          <View style={styles.buttonPlus}>
            <TouchableOpacity onPress={() => alert("Avançou")}>
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.div3}>
          <View style={styles.buttonSearch}>
            <TouchableOpacity onPress={() => alert("Avançou")}>
              <Ionicons name="ios-search-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSetting}>
            <TouchableOpacity onPress={() => alert("Avançou")}>
              <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
  },
  footerMenu: {
    alignItems: "center",
    height: 50,
    width: "100%", // Ocupa toda a largura disponível
    flexDirection: "row", // Exibir os botões em uma linha horizontal
    backgroundColor: "#fff",
    justifyContent: "space-between", // Espaçamento igual entre os botões
  },
  div1: {
    flexDirection: "row", // Exibir os botões em uma linha horizontal
    width: "30%", // Ocupa toda a largura disponível
    justifyContent: "space-between", // Espaçamento igual entre os botões
  },
  div2: {
    width: "40%", // Ocupa toda a largura disponível
    position: "absolute",
    marginLeft: "25%",
    marginBottom: "100%",
  },
  div3: {
    flexDirection: "row", // Exibir os botões em uma linha horizontal
    width: "30%", // Ocupa toda a largura disponível
    justifyContent: "space-between", // Espaçamento igual entre os botões
   },
  buttonHome: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonChart: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSearch: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSetting: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPlus: {
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#00bf6d",
    borderRadius: 45,
    height: 60,
    position: "absolute",
    marginLeft: "25%",
  },
});
