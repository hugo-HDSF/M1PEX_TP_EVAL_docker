const nodemailer = require("nodemailer")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors({origin:"*"}))
// const mailer = require("nodemailer")

const val = nodemailer.createTransport({
    host : "SSL0.OVH.NET",
    secure : true,
    auth:{
        user : "melvin",
        pass : "bissor", 
    }
})



app.post("/mail", (req, res) => {

    val.sendMail({
        to:"contact@melvin.fr",
        from:"ANDN Services <contact@andn-services.fr>" ,
        subject:"[Contact]["+req.body.nom+" "+req.body.prenom+"]["+req.body.subject+"] Souhaite vous parlez !", 
        // html: "<div><h4>"+req.body.nom+" "+req.body.prenom+" cherche à vous joindre !</h4><h6>Coordonnées</h6><ul><li>"+req.body.nom + " " + req.body.prenom+"</li><li>"+req.body.mail+"</li><li>"+req.body.telephone+"</li><li>Entreprise : "+req.body.entreprise+"</li><li>Siret : "+req.body.siret+"</li><h6>Message</h6><p>"+ req.body.message+"</p></div>"
        html: req.body.text
    }).then((value, error) => {
        if (error){
            // console.log(error)
            return res.json(error)
        } else{
            // console.log(value)
            return res.json(value)
        }
    })


})


app.listen(3200)


