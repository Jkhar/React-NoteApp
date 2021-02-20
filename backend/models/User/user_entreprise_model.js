const mongoose = require('mongoose') ; 

const noteSchema = mongoose.Schema({
            Nom : {
                type : String , 
                required : true , 
        
            } ,
 
            Tel : {
                type : String , 
                required : true , 
        
            } ,

            PaysEntreprise : {
                type : String , 
                required : true , 
        
            },
            TypeService : {
                type : String , 
                required : true , 
        
            }, 

            AproposService : {
                type : String , 
                required : true , 
        
            },              
                  
            email : {
                type : String , 
                required : true , 
        
            },
            
            password : {
                type : String , 
                required : true , 
            },
            
} ,{ timestamps : true }) ; 

module.exports = mongoose.model('User_entreprise_model' , noteSchema) ; 