import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import React from 'react';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Data from "../../components/Detalhe/Data";
import Menu from "../../components/MenuInferior/Menu";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth/auth";
import { fetchDespesas } from "../../api/despesas";
import { useFocusEffect } from '@react-navigation/native';


var list = [

];

export default function Home() {

    const [name, setName] = useState("");

    const { user } = useContext(AuthContext);
    const [despesas, setDespesas] = useState([]);
    const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  function agruparPorData(listaItens) {
    // Objeto para armazenar os totais agrupados por data
    const totaisPorData = {};

    // Iterar sobre cada item da lista
    listaItens.forEach(item => {
      // Extrair o valor numérico da string
      const valorNumerico = parseFloat(item.valor.replace("R$ ", "").replace(",", "."));

      // Extrair dia, mês e ano da data
      const [dia, mes, ano] = item.date.split('/');

      // Criar uma data formatada para ordenação
      const dataFormatada = new Date(`${ano}-${mes}-${dia}`);

      // Verificar se a data já existe nos totaisPorData
      if (!totaisPorData[item.date]) {
        // Se não existir, inicializar com o valor do item
        totaisPorData[item.date] = {
          valorTotal: valorNumerico,
          date: item.date,
          listaItens: [item],
        };
      } else {
        // Se existir, adicionar o valor do item ao total existente
        totaisPorData[item.date].valorTotal += valorNumerico;
        // Adicionar o item à lista de itens existente
        totaisPorData[item.date].listaItens.push(item);
      }
    });

    // Converter o objeto em um array de totaisPorData
    const resultado = Object.values(totaisPorData);

    // Ordenar por data de forma decrescente (mais recente primeiro)
    resultado.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Atribuir IDs sequenciais, começando de 1 para a data mais antiga
    resultado.forEach((item, index) => {
      item.id = index + 1;
    });

    // Formatar o valor total para incluir "R$" e vírgula como separador decimal
    resultado.forEach(item => {
      item.valorTotal = `R$ ${item.valorTotal.toFixed(2).replace(".", ",")}`;
    });

    // Criar uma nova variável resultadoPorData ordenada de forma crescente (mais antiga primeiro)
    const resultadoPorData = resultado.slice().reverse();

    return resultadoPorData;
  }

  function ordenarItensPorDataDecrescente(listaItens) {
    // Converter as datas para objetos Date
    const datasObjeto = listaItens.map(item => {
      const [dia, mes, ano] = item.date.split('/');
      return { ...item, dateObj: new Date(ano, mes - 1, dia) };
    });

    // Ordenar os itens por data em ordem decrescente
    datasObjeto.sort((a, b) => b.dateObj - a.dateObj);

    // Remover a propriedade dateObj antes de retornar
    const itensOrdenados = datasObjeto.map(item => {
      const { dateObj, ...rest } = item;
      return rest;
    });

    return itensOrdenados;
  }

  const loadData = async () => {
    setLoading(true);

    try {
      var despesasData = await fetchDespesas();
      setDespesas(despesasData);
      console.log("Response despesas ", despesasData);
      list = agruparPorData(despesasData);
      list = ordenarItensPorDataDecrescente(list);
      console.log("list reordenada list ", {list});
      setRefreshing(false);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log('Mounting Home');
    loadData();


    return () => {
      console.log('Unmounting Home');
    }
  }, []);

  // Função chamada quando o usuário puxa para baixo para atualizar
  const onRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  useFocusEffect(
    React.useCallback(() => {
      // Coloque aqui o código para executar ao receber foco
      console.log('Tela foi focada!');
      loadData();

    }, [])
  );

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
            <Text style={styles.infoMesAno}>Novembro 2023</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => alert("Avançou")}>
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => loadData()}>
              <MaterialCommunityIcons
                style={styles.buttonFiltro}
                name="cloud-refresh"
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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
