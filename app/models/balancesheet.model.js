const mongoose = require('mongoose');

const balanceSheet = mongoose.Schema({
    name: String,
    balance: String,
},{
    timestamps: true
});

module.exports = mongoose.model('Balance', balanceSheet);