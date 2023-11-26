import api from "./api";


export const fetchDespesas = async () => {
    const response = await api.get('/despesas');
    return response.data;
}


export const fetchNovaDespesa = async (valor, descricao, categoria, date ) => {
    try {
        const response = await api.post('/despesas', {
            valor,
            descricao,
            categoria,
            date
        });
       
        console.log("response.data", response);
   
        //alert("Despesa Cadastrada");
    } catch (error) {
        console.log("ERRO AO FAZER Cadastro ")
    }

}