module.exports = (app) => {

    const balance = require('../controllers/balancesheet.controller.js');
    /**
     * create balnce sheet
     */
    app.post('/balance', balance.create);

    /**
     * retrive all balancesheet
     */
    
     app.get('/balance', balance.findAll);
     
     app.get('/balance/:balanceId', balance.findOne);

     app.put('/balance/:balanceId', balance.update);

     app.delete('/balance/:balanceId', balance.delete);

}