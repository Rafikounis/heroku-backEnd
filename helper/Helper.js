const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')

const sendMail = async (mail, subject, content) => {
    
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ounisrafik18@gmail.com",
            pass: "ErwanMag2015@"
        }
        //---------------------------
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        // auth: {
        //   user: "lamont32@ethereal.email", // generated ethereal user
        //   pass: "H5bkZaRKHqVSDyQX3d", // generated ethereal password
        // },
      });
    //---------------------------
      // send mail with defined transport object
      let mailOption ={
          from: "ounisrafik18@gmail.com",
          to: "ounisrafik18@gmail.com, ",
          subject: "Testing mail",
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
      }
      
      //---------
      transporter.sendMail(mailOption, function(err, data){
          if (err){
              console.log("erreor", err);
          }else {
              console.log("Mail sent")
          }
      })

    //   let info = await transporter.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, ounisrafik18@gmail.com", // list of receivers
    //     subject: "Nouvelle inscription ", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   });
    
    //   console.log("Message sent: %s", info.messageId);
    //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
    //   // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    };

module.exports = sendMail;
