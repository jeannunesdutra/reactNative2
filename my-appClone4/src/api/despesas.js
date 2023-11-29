import api from "./api";


export const fetchDespesas = async () => {
    const response = await api.get('/despesas');
    return response.data;
}

export const fetchDespesasPeriodo1 = async (periodo2) => {
    const periodo =  "10/2023";
    const response = await api.get('/despesas-periodo', {
        periodo
    });
    console.log("response fetchDespesasPeriodo", response.data);
    return response.data;
}

export const fetchDespesasPeriodo = async (periodo, user_id) => {
    var response;
    try {
        response = await api.post('/despesas-periodo', {
            periodo,
            user_id
        });
        //alert("Despesa Cadastrada");
    } catch (error) {
        console.log("ERRO AO BUSCAR DESPESAS PERIODO")
    }
    return response.data;
}



export const fetchNovaDespesa = async (valor, descricao, categoria, date, pago, user_id ) => {
    try {
        const response = await api.post('/despesas', {
            valor,
            descricao,
            categoria,
            date,
            pago,
            user_id
        });
       
        console.log("response.data", response);
   
        //alert("Despesa Cadastrada");
    } catch (error) {
        console.log("ERRO AO FAZER Cadastro ")
    }

}