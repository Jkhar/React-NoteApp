const express = require('express') ; 
const  {getAllNotesNames , getAllNotes ,addNote ,updateNote , deleteNote , getNoteById} = require('../controllers/note_controllers') ;

const  { AddUserEntreprise ,AddUserIndividuel , UserConnection } = require('../controllers/user_controllers/user_controllers') ;
const  { DeposerAnnonce , getAllAnnonces ,getAllAnnonce_ville  } = require('../controllers/annonce_controllers/annonce_controllers') ;
const {Contacter_Admin , getAllMessages }= require('../controllers/contactus_controllers/ContactUs_controller') ;
const {AjouterVille , getAllVilles } = require('../controllers/Controllers_Classement/Controllers_Classment_Ville') ;
 
const gestion_notes_routes = express.Router() ; 

// Creation du Routes 
gestion_notes_routes.get('/notes',getAllNotes) ; 
gestion_notes_routes.get('/notes/nom' ,getAllNotesNames) ;
gestion_notes_routes.get('/note/:id' ,getNoteById) ;
gestion_notes_routes.post('/note/add',addNote) ; 
gestion_notes_routes.put('/note/update/:id',updateNote) ;
gestion_notes_routes.delete('/note/delete/:id',deleteNote) ;

gestion_notes_routes.post('/userEntreprise/add',AddUserEntreprise) ; 
gestion_notes_routes.post('/userIndividuel/add',AddUserIndividuel) ;

gestion_notes_routes.post('/userConnection',UserConnection) ;  

// pour les Annonces 

gestion_notes_routes.post('/DeposerAnnonce',DeposerAnnonce) ;   
gestion_notes_routes.get('/ListAnnonces',getAllAnnonces) ;
gestion_notes_routes.get('/ListAnnonce/:Ville/:Service/:Type_annonce' ,getAllAnnonce_ville) ;

// pour Les messages
gestion_notes_routes.post('/Contacter_Admin',Contacter_Admin) ;   
gestion_notes_routes.get('/LesMessages' ,getAllMessages) ;


// pour Les villes
gestion_notes_routes.post('/AjouterVille',AjouterVille) ;   
gestion_notes_routes.get('/getAllVilles' ,getAllVilles) ;

module.exports = {gestion_notes_routes} ; 