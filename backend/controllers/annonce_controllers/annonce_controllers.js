const { connection } = require('mongoose');
const Annonce_model = require('../../models/Annonce/Annonce_model') ; 

const DeposerAnnonce = (req,res)=> { 
  
    const Id_annonceur = "izaexaexaexcxezxz" ;
    const Titre_annonce_francais= req.body.Titre_annonce_francais;
    const Titre_annonce_arab= req.body.Titre_annonce_arab;
    const Type_annonce= req.body.Type_annonce ;
    const Type_service= req.body.Type_service ;
    const Ville_annonce= req.body.Ville_annonce ;
    const Description_annonce_francais = req.body.Description_annonce_francais;
    const Description_annonce_arab = req.body.Description_annonce_arab;
    // image à ajouter apres 
  
    // creation de la nouvelle note 
    const new_annonce = new Annonce_model ({Id_annonceur,Titre_annonce_francais,Titre_annonce_arab , Type_annonce,
                                            Type_service ,Ville_annonce ,Description_annonce_francais,Description_annonce_arab}) ;

    // ajout de annonce dans la base de donne
    new_annonce.save().then ( () => {
        console.log("Annonce est ajouté averc succés") ; 
        res.json({message:" ajouter avec succés "}) ; 

    }).catch (err => console.log(err)) ; 
} ;


// selectionner les Annonces  
const getAllAnnonces = (req,res) => {

    Annonce_model.find((err,annonces_from_bd) => {

        // si il ya des erreurs ou la list des note est vide 
        if(err || !annonces_from_bd) {
            return res.json( { error : "La list est vide "}) ; 
        }

        // c'est il y'a pas d'erreur on va retourner la list des annonces sous forma json
        console.log(annonces_from_bd) ;
        res.json({annonces_from_bd}) ; 
    })
} ; 

const getAllAnnonce_ville = (req,res) => {


    // contain coffee shop in ville 
    const cretere_selection = { Ville_annonce: "A" } ; 
    //permet d'extraire l'elemen book de nom auteur qui contien ayo (majscule et minuscule n'est pas important )
    // Books.find(
    //     { "Auteur": { "$regex": "Ayo", "$options": "i" } },
    //     function(err,docs) { 
    //     } 
    // );
  
    var ville_selection = req.params.Ville ;
    var service_selection = req.params.Service ;
    var type_selection = req.params.Type_annonce ;  

    if(ville_selection=="all") {ville_selection="";}
    if(service_selection=="all") {service_selection="";}
    if(type_selection=="all") {type_selection="";}
    
    console.log("------------- info recherche  ---------");
    console.log("Ville "+ville_selection + " Service"+service_selection +" type_annonce "+type_selection);
    console.log("------------- fin  ---------");

    Annonce_model.find({ "Type_service": { "$regex": service_selection, "$options": "i" } 
                        ,"Ville_annonce": { "$regex": ville_selection, "$options": "i" } ,
                         "Type_annonce"  :{ "$regex": type_selection , "$options": "i" } }
                      ,(err,annonces_from_bd) => {

        // si il ya des erreurs ou la list des note est vide 
        if(err || !annonces_from_bd) {
            return res.json( { error : "La list est vide "}) ; 
        }

        // c'est il y'a pas d'erreur on va retourner la list des annonces sous forma json
        console.log(annonces_from_bd) ;
        res.json({annonces_from_bd}) ; 
    })

} ;
module.exports = {DeposerAnnonce , getAllAnnonces ,getAllAnnonce_ville } ;