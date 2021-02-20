const Contact_Model = require('../../models/ContactUs/ContactUs_Model') ; 

const Contacter_Admin = (req,res)=> { 
 
    const email= req.body.email;
    const Nom_Prenom= req.body.Nom_Prenom ;
    const Message= req.body.Message ;
  
    // creation de la nouvelle message 
    const new_message = new Contact_Model ({email , 
        Nom_Prenom,Message}) ;

    // ajout de la message dans la base de donnee
    new_message.save().then ( () => {
        console.log("message est ajouté averc succés") ; 

        res.json({message:"Ok"}) ;

    }).catch (err => console.log(err)) ; 
} ;


// selectionner les Messages 
const getAllMessages = (req,res) => {
    Contact_Model.find( (err,Message_from_bd) => {

        // si il ya des erreurs ou la list des note est vide 
        if(err || !Message_from_bd) {
            return res.json( { error : "La list est vide "}) ; 
        }

        // c'est il y'a pas d'erreur on va retourner la list des annonces sous forma json
        console.log(Message_from_bd) ;
        res.json({Message_from_bd}) ; 
    })
} ; 

module.exports = {Contacter_Admin , getAllMessages } ;