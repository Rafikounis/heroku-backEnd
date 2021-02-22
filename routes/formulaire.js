var express = require('express');
var router = express.Router();
const controllerFormulaire = require("../controller/formulaireController")

/* GET users listing. */
router.post("/", controllerFormulaire);

module.exports = router;
