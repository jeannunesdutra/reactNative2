import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
});
