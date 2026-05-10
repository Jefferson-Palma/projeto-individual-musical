var express = require("express");
var router = express.Router();

var opineController = require("../controllers/opineController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    opineController.cadastrar(req, res);
})

module.exports = router;