import api from "./api";

export const fetchDespesas = async () => {
    const response = await api.get('/despesas');
    return response.data;
}

export const fetchAtivarApi = async () => {
    const response = await api.get('/');
    return response.data;
}

export const fetchDespesasPeriodo = async (periodo, user_id) => {
    var response;
    try {
        response = await api.post('/despesas-periodo', {
            periodo,
            user_id
        });
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
        //alert("Despesa Cadastrada");
    } catch (error) {
        console.log("ERRO AO FAZER Cadastro ")
    }

}