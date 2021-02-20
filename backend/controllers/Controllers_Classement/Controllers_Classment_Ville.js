const Ville_Model = require('../../models/Classment_Ville/ClassementVille') ; 

const AjouterVille = (req,res)=> { 
 
    const Nom_ville= req.body.Nom_ville;
    const Score_ville= 0 ;
  
    // creation de la nouvelle message 
    const new_ville = new Ville_Model ({Nom_ville  ,
        Score_ville}) ;

    // ajout de la message dans la base de donnee
    new_ville.save().then ( () => {
        console.log("ville est ajouté avec succés") ; 

        res.json({message:"Ok"}) ;

    }).catch (err => console.log(err)) ; 
} ;


// selectionner les Messages 
const getAllVilles = (req,res) => {
    Ville_Model.find( (err,ville_from_bd) => {

        // si il ya des erreurs ou la list des note est vide 
        if(err || !ville_from_bd) {
            return res.json( { error : "La list est vide "}) ; 
        }

        // c'est il y'a pas d'erreur on va retourner la list des annonces sous forma json
        console.log(ville_from_bd) ;
        res.json({ville_from_bd}) ; 
    })
} ; 

module.exports = {AjouterVille , getAllVilles } ;