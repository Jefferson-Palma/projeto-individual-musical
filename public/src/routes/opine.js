var express = require("express");
var router = express.Router();

var opineController = require("../controllers/opineController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    opineController.cadastrar(req, res);
})

router.get("/buscarComentario", function (req, res) {
    opineController.buscarComentario(req, res);
})

router.get("/buscarGenero", function (req, res) {
    opineController.buscarGenero(req, res);
})

router.get("/buscarObra", function (req, res) {
    opineController.buscarObra(req, res);
})

module.exports = router;