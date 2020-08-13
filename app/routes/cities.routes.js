module.exports = (app) => {

    const balance = require('../controllers/cities.controller.js');
    
     app.get('/cities/:city', balance.findAll);
}