const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ChannelDetails = new Schema( {
  date: { type: Date },
  status: { type: String },
  time: { type: String },
  
});

module.exports = mongoose.model('ChannelDetails', ChannelDetails);
