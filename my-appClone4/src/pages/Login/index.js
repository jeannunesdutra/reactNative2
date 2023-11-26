
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { AuthContext } from "../../contexts/auth/auth";

export default function Login(props) {

    const { signIn, signUp, setIsNewUser } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('Mounting Login');
        return () => {
            console.log('Unmounting Login');
        }
    }, []);

    const fazLogin = () => {
        console.log('Fazendo login com email: ' + email + ' e senha: ' + password);
        signIn(email, password);
    };

    const fazCadastro = () => {
        console.log('Fazendo cadastro com nome: ' + name +' - email: ' + email + ' - senha: ' + password);
        signUp(name, email, password);
    };
    return (
        <View style={styles.container}>
            <Text> Tela de Login</Text>
            <Text>Informe seu email</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Informe sua senha</Text>
            <TextInput value={password} onChangeText={setPassword} />

            <Button title="Login"
                onPress={() => {
                    fazLogin();
                }}
            />

            <Text>=======================</Text>
            <Text> Novo por aqui? Realize seu cadastro</Text>
            <Button title="Realizar Cadastro"
                onPress={() => {
                    setIsNewUser(true);
                    console.log("Botão novo usuário clicado");
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});