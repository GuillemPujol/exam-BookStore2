const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    author :{
        type : String,
        required : true
    },
    category :{
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    sellerName :{
        type : String,
        required : true
    },
    sellerEmail :{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Book',BookSchema);