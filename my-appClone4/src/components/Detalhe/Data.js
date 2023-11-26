import { StyleSheet, Text, View, FlatList } from "react-native";
import Item from "./Item";

const list = [
  {
    id: 1,
    descricao: "Loja 1aaaaaaa",
    valor: "100,00",
    date: "09/09/2023",
    categoria: "Cartão de Crédito",
  },
  {
    id: 2,
    descricao: "Loja 2",
    valor: "200,00",
    date: "09/09/2023",
    categoria: "Cartão de Crédito",
  },
  {
    id: 3,
    descricao: "Loja 3",
    valor: "300,00",
    date: "09/09/2023",
    categoria: "Cartão de Crédito",
  },
];

export default function Data({ data }) {
  console.log('teste ', data.listaItens[0]);
  return (
    <View style={styles.container}>
      <View style={styles.dataTotal}>
        <View>
          <Text style={styles.data}>{data.date}</Text>
        </View>
        <View>
          <Text style={styles.total}>{`${data.valorTotal}`}</Text>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={data.listaItens}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Item data={item} />}
      />
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
