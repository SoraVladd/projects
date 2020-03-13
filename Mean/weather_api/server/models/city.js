const mongoose  = require('mongoose')
const CitySchema = new mongoose.Schema({
        humidity: {type: Number, required: true},
        tempHigh: {type: Number, required: true},
        tempLow: {type: Number, required: true},
        tempAvg: {type: Number, required: true},
        status: {type: String, required: true}
},{timestamps: true});
const City = mongoose.model('City', CitySchema);
module.exports =  City;