
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

    const fazCadastro = () => {
        console.log('Fazendo cadastro com nome: ' + name +' - email: ' + email + ' - senha: ' + password);
        signUp(name, email, password);
        setIsNewUser(false);
    };
    return (
        <View style={styles.container}>

            <Text>=======================</Text>
            <Text> Novo por aqui? Realize seu cadastro</Text>
            <Text> Tela de Cadastro</Text>
            <Text>Informe seu nome</Text>
            <TextInput value={name} onChangeText={setName} />
            <Text>Informe seu email</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Informe sua senha</Text>
            <TextInput value={password} onChangeText={setPassword} />
            <Button title="Realizar Cadastro"
                onPress={() => {
                    fazCadastro();
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