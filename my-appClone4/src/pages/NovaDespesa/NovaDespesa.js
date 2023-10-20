import { StatusBar } from "expo-status-bar";
import CurrencyInput from "react-native-currency-input";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { Input } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Despesa() {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#00bf6d" />

      <View>
        <Text style={styles.textValorDespesa}>Valor da despesa</Text>
      </View>
      <View style={styles.valorDespesaDiv}>
        <CurrencyInput
          style={styles.valorDespesa}
          value={value}
          placeholder="R$ 0,00"
          onChangeValue={setValue}
          prefix="R$ "
          delimiter="."
          separator=","
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue);
          }}
        />
      </View>
      <View style={styles.calendar}>
        <Text>
          <MaterialCommunityIcons
            name="calendar-blank"
            size={24}
            color="#8f8d8d"
          />
        </Text>
        <View style={styles.calendarInput}>
          <Text>Data de vencimento</Text>
          <Input placeholder={"20/10/2023"} />
        </View>
      </View>

      <View style={styles.descricao}>
        <Text>
          <MaterialCommunityIcons
            name="text-box-outline"
            size={24}
            color="#8f8d8d"
          />
        </Text>
        <View style={styles.descricaoInput}>
          <Text>Descricao</Text>
          <Input placeholder="Ex:: Cartão de Crédito" />
        </View>
      </View>

      <View style={styles.classificacao}>
        <Text>
          <Feather name="bookmark" size={24} color="#8f8d8d" />
        </Text>
        <View style={styles.classificacaoInput}>
          <Text>Classificacao</Text>
          <Input placeholder="Ex: Viagem" />
        </View>
      </View>

      <View style={styles.viewRepetir}>
        <RadioButton
          value={checked}
          status={checked === true ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
        />

        <Text style={styles.textRepetir}>Repetir Mensalmente</Text>
      </View>

      {checked && (
        <View style={styles.qtdVezes}>
          <Text>
            <FontAwesome name="repeat" size={24} color="#8f8d8d" />
          </Text>
          <View style={styles.qtdVezesInput}>
            <Text>Quantidade de vezes</Text>
            <Input placeholder="Ex: 12" />
          </View>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("teste")}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  textValorDespesa: {
    marginTop: 15,
    fontSize: 15,
  },
  valorDespesaDiv: {
    borderBottomWidth: 2,
    borderBlockColor: "#cfcfcf",
    width: "70%",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    marginBottom: 30,
  },
  valorDespesa: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    fontSize: 30,
    color: "#8f8d8d",
  },
  button: {
    width: "90%",
    height: 45,
    backgroundColor: "#00bf6d",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: "bold",
  },
  viewRepetir: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    paddingBottom: 20,
  },
  textRepetir: {
    paddingLeft: 10,
  },
  calendar: {
    flexDirection: "row",
    width: "90%",
  },

  calendarInput: {
    width: "90%",
    paddingLeft: 15,
  },

  descricao: {
    flexDirection: "row",
    width: "90%",
  },

  descricaoInput: {
    width: "90%",
    paddingLeft: 15,
  },
  classificacaoInput: {
    width: "90%",
    paddingLeft: 15,
  },
  classificacao: {
    flexDirection: "row",
    width: "90%",
  },
  qtdVezes: {
    flexDirection: "row",
    width: "90%",
  },
  qtdVezesInput: {
    width: "90%",
    paddingLeft: 15,
  },
});
