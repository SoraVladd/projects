const mongoose  = require ('../config/mongoose.js')
const City = require('../models/city.js')

module.exports  = {
        index: function(req, res) {
            City.find()
                    .then(data => res.json({cities: data}))
                    .catch(err => res.json(err));
        },
            find: function(req,res){
                City.findOne({_id:req.params.id})
                     .then(data => res.json(data))
                     .catch(err => res.json(err));
                }
        };


