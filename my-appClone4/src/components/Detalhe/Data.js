import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Item from "./Item";

export default function Data() {
  return (
    <View style={styles.container}>
      <View style={styles.dataTotal}>
        <View>
          <Text style={styles.data}>01/06/2023</Text>
        </View>
        <View>
          <Text style={styles.total}>R$ 200,00</Text>
        </View>
      </View>

      <Item />
      <Item />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
  },
  title: {
    fontSize: 18, // Tamanho da fonte do título
    color: "#fff", // Cor do título
  },

  dataTotal: {
    marginTop: 15,
    justifyContent: "space-between", // Espaçamento igual entre os botões
    width: "100%", // Ocupa toda a largura disponível
    flexDirection: "row", // Exibir os botões em uma linha horizontal
  },

  data: {
    marginLeft: 15,
    fontWeight: "bold", //
    fontSize: 16, // Tamanho da fonte do título
  },

  total: {
    marginRight: 25,
    fontWeight: "bold", //
    fontSize: 16, // Tamanho da fonte do título
  },

  itens: {
    width: "100%", // Ocupa toda a largura disponível
    flexDirection: "row", // Exibir os botões em uma linha horizontal
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    backgroundColor: "blue",
    borderRadius: 45,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 10,
  },
  descricao: {
    width: "55%", // Ocupa toda a largura disponível
  },
  valor: {
    width: "25%", // Ocupa toda a largura disponível
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", // Exibir os botões em uma linha horizontal
  },
  textDescricao: {
    fontSize: 14, // Tamanho da fonte do título
  },
  textCategoria: {
    fontSize: 12, // Tamanho da fonte do título
  },
  textValor: {
    fontSize: 14, // Tamanho da fonte do título
    paddingRight: 10,
  },
});
