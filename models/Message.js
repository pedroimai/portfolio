var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
   name: String,
   email: String, 
   content: String
});

module.exports = mongoose.model('Message', MessageSchema);