var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT id, nome, DATE_FORMAT(dtLancamento,'%d/%m/%Y') AS dtLancamento, imagem, trailer, tipoMusical, descricao FROM musical WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, nome, imagem FROM musical`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, listar };
