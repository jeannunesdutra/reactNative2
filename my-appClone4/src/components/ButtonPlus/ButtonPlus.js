import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ButtonPlus() {
    const navigation = useNavigation();

  return (
    <View>
      <View style={styles.buttonPlus}>
        <TouchableOpacity onPress={() => navigation.navigate("Nova despesa")}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPlus: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#00bf6d",
    borderRadius: 45,
    height: 40,
    position: "absolute",
    bottom: 25, // Isso coloca o elemento no rodapé
  },
});
