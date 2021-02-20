const mongoose = require('mongoose') ; 

const AnnonceSchema = mongoose.Schema({
            Id_annonceur  : {
                type : String , 
                required : true ,      
            } ,
    
            Titre_annonce_francais  : {
                type : String , 
                required : true ,      
            } ,
            Titre_annonce_arab  : {
                type : String , 
                required : true ,      
            } ,
            
            Type_annonce : {
                type : String , 
                required : true ,    
            } ,

            Type_service : {
                type : String , 
                required : true ,    
            } , 

            Ville_annonce : {
                type : String , 
                required : true ,   
            },
            
            Description_annonce_francais: {
                type : String , 
                required : true ,   
            }, 
            
            Description_annonce_arab : {
                type : String , 
                required : true ,   
            },
                                       
} ,{ timestamps : true }) ; 

module.exports = mongoose.model('Annonce_model' , AnnonceSchema) ; 