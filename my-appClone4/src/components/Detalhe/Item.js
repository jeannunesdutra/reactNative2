import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Item({ data }) {
  return (
    <TouchableOpacity onPress={() => alert("Detalhe do dia")}>
      <View style={styles.itens}>
        <View style={styles.icon}>
          <AntDesign name="creditcard" size={24} color="white" />
        </View>
        <View style={styles.descricao}>
          <Text style={styles.textDescricao}>{data.descricao}</Text>
          <Text style={styles.textCategoria}>{data.categoria}</Text>
        </View>
        <View style={styles.valor}>
          <Text style={styles.textValor}>{`${data.valor.includes("R$") ? data.valor : "R$ " + data.valor}`}</Text>
          <Entypo name= {`${data.pago == 0 ? 'circle-with-minus' : 'circle-with-plus'}`}  size={12} color={`${data.pago == 0 ? 'red' : 'green'}`} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 14,
  },
  textCategoria: {
    fontSize: 12,
  },
  textValor: {
    fontSize: 14,
    paddingRight: 10,
  },
});
