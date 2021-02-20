const mongoose = require('mongoose') ; 

const ContactSchema = mongoose.Schema({

            email : {
                type : String , 
                required : true , 
        
            } ,
            Nom_Prenom : {
                type : String , 
                required : true , 
        
            } ,
 
            Message : {
                type : String , 
                required : true , 
        
            } 
           
} ,{ timestamps : true }) ; 

module.exports = mongoose.model('Contact_Model' , ContactSchema) ; 