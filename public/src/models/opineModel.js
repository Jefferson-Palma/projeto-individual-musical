var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(fkUsuario, fkMusical, comentario, nota) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",fkUsuario, fkMusical, comentario, nota);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO pesquisa (fkUsuario, fkMusical, comentario, nota) VALUES ('${fkUsuario}', '${fkMusical}', '${comentario}','${nota}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarGenero(){
    var instrucaoSql=`SELECT musical.tipoMusical, TRUNCATE(AVG(nota),1) AS mediaNota FROM pesquisa 
    JOIN musical ON id=fkMusical
    GROUP BY tipoMusical ORDER BY mediaNota DESC LIMIT 1;`;
    return database.executar(instrucaoSql);
}
function buscarComentario(){
    var instrucaoSql=` SELECT musical.nome, TRUNCATE(COUNT(idPesquisa),0) AS qtdAvaliacao FROM pesquisa 
    JOIN musical ON id=fkMusical
    GROUP BY fkMusical ORDER BY qtdAvaliacao DESC LIMIT 1;`;
    return database.executar(instrucaoSql);
}
function buscarQtdComentario(){
    var instrucaoSql=` 
SELECT musical.nome, COUNT(idPesquisa) AS qtdAvaliacao FROM pesquisa 
JOIN musical ON id=fkMusical
 GROUP BY fkMusical ORDER BY qtdAvaliacao;`;
    return database.executar(instrucaoSql);
}

function buscarObra(){
    var instrucaoSql = `SELECT musical.nome, TRUNCATE(AVG(nota),1) AS mediaNota FROM pesquisa
    JOIN musical ON id=fkMusical 
    GROUP BY fkMusical ORDER BY mediaNota DESC LIMIT 1;
`;

   return database.executar(instrucaoSql);
    
}

function buscarRegistro(){
    var instrucaoSql = `SELECT musical.nome, TRUNCATE(AVG(nota),1) AS media_notas FROM pesquisa
JOIN musical ON id=fkMusical
GROUP BY musical.id;
`;
   return database.executar(instrucaoSql);
    
}

module.exports = {
    cadastrar,
    buscarComentario,
    buscarGenero,
    buscarObra,
    buscarRegistro,
    buscarQtdComentario
};