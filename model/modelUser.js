const mongoose = require("mongoose");

const ModelUser = mongoose.model("ModelUser", {
    nom: String,
    prenom: String,
    tel: String,
    mail: String,
    nomDuRestaurant: String,
    adresseDuRestaurant: String,
    lienDeSiteDuRestaurant: String,

  },

);

module.exports = ModelUser;