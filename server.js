const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
/**
 * create express app
 */
const app = express();
require('./app/routes/balancesheet.routes')(app);
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 *parse requests of content-type - application/json 
 */
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({"message": "Welcome to Raise the Bar Initiative"});
})

app.listen(3000, ()=>{
    console.log('server running succesfully');
})