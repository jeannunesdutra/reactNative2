import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const OpcoesSituacaoPagamento = ({ items, onValueChange }) => {
    return (
        <RNPickerSelect

            onValueChange={(onValueChange) => console.log(onValueChange)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
            style={pickerSelectStyles}
        />
    );
};

export default OpcoesSituacaoPagamento;


const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'red', // Cor da borda vermelha
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // para garantir que o texto seja alinhado à direita
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'red', // Cor da borda vermelha
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // para garantir que o texto seja alinhado à direita
    },
    placeholder: {
        color: 'black', // Cor do texto do marcador de posição
    },
    iconContainer: {
        top: 10,
        right: 12,
    },
};