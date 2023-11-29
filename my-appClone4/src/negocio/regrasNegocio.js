function calcularTotais(dados) {
    let totalPago = 0;
    let totalAPagar = 0;

    dados.forEach(item => {
        console.log('VALOR valorNumerico oiginal ', item?.valor);
        const valorNumerico = parseFloat(item?.valor?.replace("R$ ", "").replace(".", "").replace(",", "."));
        console.log('VALOR valorNumerico ', valorNumerico)
        if (item.pago === "1") {
            totalPago += valorNumerico;
        } else {
            totalAPagar += valorNumerico;
        }
    });

    //console.log("total a pago ", totalPago);
    let aPagar = 'RS ';
    let pago;
    let totais = 0;
    let totalMes;
    if (totalAPagar != undefined && totalAPagar != NaN) {
        aPagar = 'R$ ' + totalAPagar.toFixed(2).replace(".", ",");
        totais = totais + totalAPagar;
    }
    if (totalPago != undefined && totalPago != NaN) {
        pago = 'R$ ' + totalPago.toFixed(2).replace(".", ",");
        totais = totais + totalPago;
    }
    totalMes = 'R$ ' + totais.toFixed(2).replace(".", ",");

    aPagar = formatarMoeda(aPagar);
    pago = formatarMoeda(pago);
    totalMes = formatarMoeda(totalMes);

    //console.log("***********total a pagar ", aPagar);
    return { aPagar, pago, totalMes };
}

function formatarMoeda(valor) {
    // Converte para número removendo o símbolo R$ e substituindo a vírgula por ponto
    const numero = parseFloat(valor.replace("R$ ", "").replace(",", "."));

    // Formata o número como moeda brasileira
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    // Retorna o valor formatado
    return formatoMoeda.format(numero);
}

function agruparPorData(listaItens) {
    // Objeto para armazenar os totais agrupados por data
    const totaisPorData = {};

    // Iterar sobre cada item da lista
    listaItens.forEach(item => {
        // Extrair o valor numérico da string
        const valorNumerico = parseFloat(item.valor.replace("R$ ", "").replace(".", "").replace(",", "."));

        // Extrair dia, mês e ano da data
        const [dia, mes, ano] = item.date.split('/');

        // Criar uma data formatada para ordenação
        const dataFormatada = new Date(`${ano}-${mes}-${dia}`);

        // Verificar se a data já existe nos totaisPorData
        if (!totaisPorData[item.date]) {
            // Se não existir, inicializar com o valor do item
            totaisPorData[item.date] = {
                valorTotal: valorNumerico,
                date: item.date,
                listaItens: [item],
            };
        } else {
            // Se existir, adicionar o valor do item ao total existente
            totaisPorData[item.date].valorTotal += valorNumerico;
            // Adicionar o item à lista de itens existente
            totaisPorData[item.date].listaItens.push(item);
        }
    });

    // Converter o objeto em um array de totaisPorData
    const resultado = Object.values(totaisPorData);

    // Ordenar por data de forma decrescente (mais recente primeiro)
    resultado.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Atribuir IDs sequenciais, começando de 1 para a data mais antiga
    resultado.forEach((item, index) => {
        item.id = index + 1;
    });

    // Formatar o valor total para incluir "R$" e vírgula como separador decimal
    resultado.forEach(item => {
        item.valorTotal = formatarMoeda(`R$ ${item.valorTotal.toFixed(2).replace(".", ",")}`);
    });

    // Criar uma nova variável resultadoPorData ordenada de forma crescente (mais antiga primeiro)
    const resultadoPorData = resultado.slice().reverse();

    return resultadoPorData;
}

function ordenarItensPorDataDecrescente(listaItens) {
    // Converter as datas para objetos Date
    const datasObjeto = listaItens.map(item => {
        const [dia, mes, ano] = item.date.split('/');
        return { ...item, dateObj: new Date(ano, mes - 1, dia) };
    });

    // Ordenar os itens por data em ordem decrescente
    datasObjeto.sort((a, b) => b.dateObj - a.dateObj);

    // Remover a propriedade dateObj antes de retornar
    const itensOrdenados = datasObjeto.map(item => {
        const { dateObj, ...rest } = item;
        return rest;
    });

    return itensOrdenados;
}

function obterNomeMes(numeroMes) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return meses[numeroMes - 1]; // Os meses no array começam do índice 0
}

function obterMesEAnoAtual() {
    const agora = new Date();
    const numeroMes = agora.getMonth() + 1; // O mês começa do zero
    const nomeMes = obterNomeMes(numeroMes);
    const ano = agora.getFullYear();

    const mesAno = `${nomeMes} ${ano}`;
    const mes = numeroMes;

    // Criar e retornar o objeto dataAtual
    const dataAtual = {
        mes: mes,
        ano: ano,
        mesAnoPorExtenso: mesAno
    };
    //console.log("Data ATUAL -> ", dataAtual);
    return dataAtual;
}

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = {
    agruparPorData,
    calcularTotais,
    ordenarItensPorDataDecrescente,
    obterNomeMes,
    obterMesEAnoAtual,
};