import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
import { fetchDespesasPeriodo } from "../../api/despesas";
import { useFocusEffect } from '@react-navigation/native';
const { agruparPorData, calcularTotais, ordenarItensPorDataDecrescente, obterNomeMes, obterMesEAnoAtual } = require('../../negocio/regrasNegocio');

var list = [];

export default function Home() {

  const { user } = useContext(AuthContext);
  const [despesas, setDespesas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  var [dataAtual, setDataAtual] = useState({});
  var [totais, setTotais] = useState({});

  function loadMesAtual() {
    var datainicializacao = obterMesEAnoAtual();
    setDataAtual(datainicializacao);
    var periodo = `${datainicializacao.mes + "/" + datainicializacao.ano}`;
    loadData(periodo);
  }

  const loadData = async (periodo) => {
    setLoading(true);

    try {
      var despesasData = await fetchDespesasPeriodo(periodo, user.id);
      list = agruparPorData(despesasData);
      list = ordenarItensPorDataDecrescente(list);
      setRefreshing(false);
      setTotais(calcularTotais(despesasData));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log('Mounting Home');
    loadMesAtual();

    return () => {
      console.log('Unmounting Home');
    }
  }, []);

  // Função chamada quando o usuário puxa para baixo para atualizar
  const onRefresh = () => {
    setRefreshing(true);
    loadMesAtual();
  };

  useFocusEffect(
    React.useCallback(() => {
      //código para executar ao receber foco
      loadMesAtual();
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
            <Text style={styles.infoMesAno}>{`${dataAtual.mesAnoPorExtenso}`}</Text>

          </View>
          
          <View>
            <TouchableOpacity onPress={() => alert("Avançou")}>
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </TouchableOpacity>
          </View>
          
          <View>
            <TouchableOpacity onPress={() => loadMesAtual()}>
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
          <Text style={styles.titleNameUser}>{user.name}</Text>

          <Text style={styles.titleTotalMes}>Total do mês</Text>
        </View>
        <View>
          <Text style={styles.valorTotalMes}>{totais.totalMes}</Text>
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
                <Text style={styles.totalPago}>{totais.pago}</Text>
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
                <Text style={styles.totalPagar}>{totais.aPagar}</Text>
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
    marginTop: 15
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
  titleNameUser: {
    fontSize: 15, // Tamanho da fonte do título
    color: "#fff", // Cor do título
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
