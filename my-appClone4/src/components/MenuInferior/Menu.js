import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.footerMenu}>
      <View style={styles.div1}>
        <View style={styles.buttonHome}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonChart}>
          <TouchableOpacity onPress={() => alert("Clique realizado")}>
            <Ionicons name="pie-chart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.div2}></View>

      <View style={styles.div3}>
        <View style={styles.buttonSearch}>
          <TouchableOpacity onPress={() => alert("Clique realizado")}>
            <Ionicons name="ios-search-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSetting}>
          <TouchableOpacity onPress={() => alert("Clique realizado")}>
            <Ionicons name="settings-outline" size={24} color="black" />
          </TouchableOpacity>
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
});
