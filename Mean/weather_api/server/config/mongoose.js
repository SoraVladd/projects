mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/weatherapi_db', {useNewUrlParser: true});
