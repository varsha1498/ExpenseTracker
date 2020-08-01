const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    createedAt: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Transaction', TransactionSchema, 'Transactions');