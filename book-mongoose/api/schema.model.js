const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    title: {
        type: String
    },
    author: [
        {
            type: String
        }
    ],
    published_date: {
        type: String
    },
    pages: {
        type: Number
    },
    language: {
        type: String
    },
    publisher_id: {
        type: String
    }
},{
    collection: 'book',
    ordered: true
})

module.exports = mongoose.model('Book', Book);

