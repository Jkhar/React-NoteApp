const express = require('express') ; 
const  {getAllNotesNames , getAllNotes ,addNote ,updateNote , deleteNote , getNoteById} = require('../controllers/note_controllers') ;

const gestion_notes_routes = express.Router() ; 

// Creation du Routes 
gestion_notes_routes.get('/notes',getAllNotes) ; 
gestion_notes_routes.get('/notes/nom' ,getAllNotesNames) ;
gestion_notes_routes.get('/note/:id' ,getNoteById) ;
gestion_notes_routes.post('/note/add',addNote) ; 
gestion_notes_routes.put('/note/update/:id',updateNote) ;
gestion_notes_routes.delete('/note/delete/:id',deleteNote) ;

module.exports = {gestion_notes_routes} ; 