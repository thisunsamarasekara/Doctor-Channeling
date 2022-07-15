const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Docbookingpatient = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  nic: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
 
});

module.exports = mongoose.model('Docbookingpatient', Docbookingpatient);