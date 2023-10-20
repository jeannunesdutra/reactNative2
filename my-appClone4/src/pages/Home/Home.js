import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Data from "../../components/Detalhe/Data";
import Menu from "../../components/MenuInferior/Menu";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";

const list = [
  {
    id: 1,
    valorTotal: "500,00",
    date: "09/06/2023",
    listaItens: [
      {
        id: 1,
        descricao: "Loja 1",
        valor: "100,00",
        date: "09/09/2023",
        categoria: "Cartão de Crédito",
      },
      {
        id: 2,
        descricao: "Loja 2",
        valor: "250,00",
        date: "09/09/2023",
        categoria: "Cartão de Crédito",
      },
      {
        id: 3,
        descricao: "Loja 3",
        valor: "250,00",
        date: "09/09/2023",
        categoria: "Cartão de Crédito",
      },
    ],
  },
  {
    id: 2,
    valorTotal: "300,00",
    date: "10/06/2023",
    listaItens: [
      {
        id: 1,
        descricao: "Loja 3",
        valor: "300,00",
        date: "10/09/2023",
        categoria: "Cartão de Crédito",
      },
    ],
  },
  {
    id: 3,
    valorTotal: "500,00",
    date: "11/06/2023",
    listaItens: [
      {
        id: 1,
        descricao: "Loja 3",
        valor: "300,00",
        date: "11/09/2023",
        categoria: "Cartão de Crédito",
      },
      {
        id: 2,
        descricao: "Loja 2",
        valor: "200,00",
        date: "11/09/2023",
        categoria: "Cartão de Crédito",
      },
    ],
  },
  {
    id: 4,
    valorTotal: "500,00",
    date: "12/06/2023",
    listaItens: [
      {
        id: 1,
        descricao: "Loja 3",
        valor: "300,00",
        date: "12/09/2023",
        categoria: "Cartão de Crédito",
      },
      {
        id: 2,
        descricao: "Loja 2",
        valor: "200,00",
        date: "12/09/2023",
        categoria: "Cartão de Crédito",
      },
    ],
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.navegacaoFiltro}>
          <View>
            <TouchableOpacity onPress={() => alert("Retrocedeu")}>
              <MaterialIcons
                style={styles.buttonRetroceder}
                name="navigate-before"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.infoMesAno}>Junho 2021</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => alert("Avançou")}>
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => alert("Filtro")}>
              <MaterialCommunityIcons
                style={styles.buttonFiltro}
                name="filter-variant"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.titleTotalMes}>Total do mês</Text>
        </View>
        <View>
          <Text style={styles.valorTotalMes}>R$ 1.819,00</Text>
        </View>
        <View style={styles.susbtotais}>
          <View style={styles.pago}>
            <View style={styles.iconPago}>
              <AntDesign name="check" size={20} color="white" />
            </View>
            <View style={styles.infoPago}>
              <View>
                <Text style={styles.titlePago}>Pago</Text>
              </View>
              <View>
                <Text style={styles.totalPago}>R$ 19,00</Text>
              </View>
            </View>
          </View>
          <View style={styles.pagar}>
            <View style={styles.iconPagar}>
              <Feather name="alert-triangle" size={20} color="white" />
            </View>
            <View style={styles.infoPagar}>
              <View>
                <Text style={styles.titlePagar}>A pagar</Text>
              </View>
              <View>
                <Text style={styles.totalPagar}>R$ 1.800,00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerBody}>

          <FlatList
            style={{
              width: "100%", // Ocupa toda a largura disponível
              marginLeft: 40,
              paddingTop: 10,
            }}
            data={list}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Data data={item} />}
          />
      </View>

      <Menu />
      <ButtonPlus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
  },
  containerHeader: {
    flex: 0.3,
    backgroundColor: "#00bf6d",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  containerBody: {
    flex: 0.7,
    backgroundColor: "#dedede",
    alignItems: "center",
  },
  navegacaoFiltro: {
    width: "90%", // Ocupa toda a largura disponível
    paddingLeft: 60,
    justifyContent: "space-between", // Espaçamento igual entre os botões
    flexDirection: "row", // Exibir os botões em uma linha horizontal
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: "bold", //
    color: "#fff", // Cor do título
  },
  buttonRetroceder: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: "bold", //
    color: "#fff", // Cor do título
  },

  infoMesAno: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: "bold", //
    color: "#fff", // Cor do título
  },
  buttonAvancar: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: "bold", //
    color: "#fff", // Cor do títul
  },
  buttonFiltro: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: "bold", //
    color: "#fff", // Cor do títul
  },

  titleTotalMes: {
    fontSize: 18, // Tamanho da fonte do título
    color: "#fff", // Cor do título
  },
  valorTotalMes: {
    fontSize: 30, // Tamanho da fonte do título
    fontWeight: "bold", //
    color: "#fff", // Cor do título
    marginBottom: 15,
  },
  susbtotais: {
    paddingLeft: 35,
    justifyContent: "space-between", // Espaçamento igual entre os botões
    width: "100%", // Ocupa toda a largura disponível
    flexDirection: "row", // Exibir os botões em uma linha horizontal
  },
  pago: {
    width: "50%", // Ocupa toda a largura disponível
    flexDirection: "row", // Exibir os botões em uma linha horizontal
  },
  pagar: {
    width: "50%", // Ocupa toda a largura disponível

    flexDirection: "row", // Exibir os botões em uma linha horizontal
  },
  iconPago: {
    paddingTop: 8,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 45,
    width: 40,
    height: 40,
  },
  iconPagar: {
    paddingTop: 6,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 45,
    width: 40,
    height: 40,
  },
  infoPago: {
    width: "70%", // Ocupa toda a largura disponível
  },
  infoPagar: {
    width: "70%", // Ocupa toda a largura disponível
  },

  titlePago: {
    width: "100%", // Ocupa toda a largura disponível
    fontSize: 18, // Tamanho da fonte do título
    color: "#fff", // Cor do título
    paddingLeft: 15,
  },
  totalPago: {
    width: "100%", // Ocupa toda a largura disponível
    fontSize: 18, // Tamanho da fonte do título
    color: "#fff", // Cor do título
    fontWeight: "bold", //
    paddingLeft: 15,
  },
  titlePagar: {
    width: "100%", // Ocupa toda a largura disponível
    fontSize: 18, // Tamanho da fonte do título
    color: "#fff", // Cor do título
    paddingLeft: 15,
  },
  totalPagar: {
    width: "100%", // Ocupa toda a largura disponível
    fontSize: 18, // Tamanho da fonte do título
    color: "#fff", // Cor do título
    fontWeight: "bold", //
    paddingLeft: 15,
  },
});
