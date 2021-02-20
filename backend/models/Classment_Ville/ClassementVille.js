const mongoose = require('mongoose') ; 

const Villechema = mongoose.Schema({

    Nom_ville : {
        type : String , 
        required : true , 

    } ,
        
    Score_ville : {          
        type : Number , 
        required : true , 
        
    } 
           
} ,{ timestamps : true }) ; 

module.exports = mongoose.model('Ville_Model' , Villechema) ; 