const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://new_user04:8433@healthcare.sgm5k.mongodb.net/HealthCareChanneling?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded....');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;