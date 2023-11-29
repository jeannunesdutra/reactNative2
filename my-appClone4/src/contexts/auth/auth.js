import { createContext, useState } from "react";
import api from "../../api/api";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigation = useNavigation();

    const [isLogged, setIsLogged] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        setUser({ email });
        //api.defaults.headers.authorization = `Bearer ${email}`;

        try {
            const response = await api.post('/login', {
                email,
                password
            });
            const { user, token } = response.data;

            api.defaults.headers.authorization = token;
            console.log("USER REQUISIÇÂO: ", user);
            setUser(user);
            setIsLogged( user != undefined ? true : false);
            navigation.navigate('Home');

        } catch (error) {
            alert("ERRO AO FAZER LOGIN ", error);
        }

    }

    const signUp = async (name, email, password) => {
        try {
            const response = await api.post('/users', {
                name,
                email,
                password
            });
           alert("Usuário Cadastrado"); 
        } catch (error) {
            console.log("ERRO AO FAZER Cadastro ")
        }

    }

    const signOut = () => {
        setUser(null);
        setIsLogged(false);
    }

    return (
        <AuthContext.Provider value={{ name: null, isLogged, isNewUser, setIsNewUser, user, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };