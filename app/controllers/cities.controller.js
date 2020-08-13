const Cities = require('../models/cities.model.js');

exports.findAll = (req,res) =>{
    Cities.find({city: { $regex: '.*' + req.params.city + '.*', $options: 'i'} })
    .then(cities => {
        res.send(cities);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};