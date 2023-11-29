import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth/auth";
import { useContext, useEffect, useState } from "react";

export default function Cadastrar() {


    const { signIn, signUp, setIsNewUser } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fazCadastro = () => {
        console.log('Fazendo cadastro com nome: ' + name + ' - email: ' + email + ' - senha: ' + password);
        signUp(name, email, password);
        setIsNewUser(false);
    };

    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInLeft"
                delay={500}
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Cadatre-se(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput placeholder="Digite seu nome" style={styles.input} value={name} onChangeText={setName} />

                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite seu email" style={styles.input} value={email} onChangeText={setEmail} />

                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite seu email" style={styles.input} value={password} onChangeText={setPassword} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => fazCadastro()}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => setIsNewUser(false) }>
                    <Text style={styles.registerText}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38a69d",
    },
    containerHeader: {
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%",
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFF",
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#38a69d",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center",
    },
    registerText: {
        color: "#a1a1a1",
    },
});
