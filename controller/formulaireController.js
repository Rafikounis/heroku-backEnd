// import model 
// const sendMail = require("../helper/Helper");
const nodemailer = require("nodemailer");

const ModelUser = require("../model/ModelUser")


const formulaireController = (req, res, next) => {
    console.log(req.body);
    const form = req.body;

    const newForm = new ModelUser({
        nom: form.nom,
        prenom: form.prenom,
        tel: form.tel,
        mail: form.mail,
        nomDuRestaurant: form.nomDuRestaurant,
        adresseDuRestaurant: form.adresseDuRestaurant,
        lienDeSiteDuRestaurant: form.lienDeSiteDuRestaurant,

    });
     /* On enregistre les info du formulaire dans la collection Atlas*/
 
  newForm.save({}, (err) => {
    if (err) {
      res.status(500).send("Not saved on mongoAtlas!");
      console.log("formulaire ne passe pas")
    } else {
      res.send("formulaire envoyé");
      // sendMail("", "Coucou", form.mail);
      // let data = req.body;
      let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
          user: "ounisrafik18@gmail.com",
          pass: "ErwanMag2015@"
        }
      })
      let mailOption={
        from : form.mail,
        to: `ounisrafik18@gmail.com`,
        subject: `Message de ${form.nom}`,
        html: `
          <h3> Nouvelle inscription de </h3>
            <ul> 
              <li> Nom : ${form.nom} </li>
              <li> Prenom : ${form.prenom}</li>
              <li>Email : ${form.mail} </li>
              <li>Tel : ${form.tel} </li>
              <li>Nom du Restaurant : ${form.nomDuRestaurant} </li>
              <li>Lien du Restaurant : ${form.lienDeSiteDuRestaurant} </li>

            </ul>       
        
        `
      }
      smtpTransport.sendMail(mailOption, (error, response)=>{
        if(err){
          res.send(err)
        }else{
          res.send('Success')
        }
      })

      smtpTransport.close();
      
    }
  });

}

module.exports = formulaireController;