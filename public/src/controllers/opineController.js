var opineModel = require("../models/opineModel");



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario= req.body.idUsuario;
    var fkMusical=req.body.idMusical;
    var comentario=req.body.opiniao;
    var nota=req.body.notaMusical;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (fkMusical == undefined) {
        res.status(400).send("Seu fkMusical está undefined!");
    } else if (comentario == undefined) {
        res.status(400).send("Sua comentario está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Sua nota está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        opineModel.cadastrar(fkUsuario, fkMusical, comentario, nota)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function buscarObra(req, res){
    opineModel.buscarObra().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function buscarGenero(req, res){
    opineModel.buscarGenero().then((resultado) => {
        res.status(200).json(resultado);
    });
}
function buscarComentario(req, res){
    opineModel.buscarComentario().then((resultado) => {
        res.status(200).json(resultado);
    });
}
function buscarQtdComentario(req, res){
    opineModel.buscarQtdComentario().then((resultado) => {
        res.status(200).json(resultado);
    });
}
function buscarRegistro(req, res){
    opineModel.buscarRegistro().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  opineModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
    buscarPorId,
    cadastrar,
    buscarComentario,
    buscarGenero,
    buscarObra,
    buscarRegistro,
    buscarQtdComentario
}