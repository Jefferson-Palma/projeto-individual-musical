var musicalModel = require("../models/musicalModel");

function listar(req, res) {
  musicalModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  musicalModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}



module.exports = {
  buscarPorId,
  listar
};
