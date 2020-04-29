const express = require('express');
const bookRouter = express.Router();
const { check, validationResult } = require('express-validator');

let Book = require('./schema.model');

// route post add book
bookRouter.route('/books').post (function(req,res){
    let books = new Book(req.body);
    books.save()
    .then(books => {
        res.status(200).json({'books': 'Book has added succesfully'});
    })
    .catch(err => {
        res.status(400).json('Unable add Book to database');
    });
});

// route get all list book
bookRouter.route('/books').get (function(req,res){
    Book.find(function(err, books){
        if(err){
            console.log(err);
        } else {
            res.json(books);
        }
    });
});

// route get book by id
bookRouter.route('/books/:id?').get (function(req,res){
    let id = req.params.id;
    Book.findById(id, function(err, books){
        res.json(books);
    });
});

// route put book by id
bookRouter.route('/books/:id?').put (function(req,res){
    Book.findById(req.params.id, function(err, books){
        if(!books){
            res.status(400).send("Data not found");
        }
        else {
            books._id = req.body._id;
            books.title = req.body.title;
            books.author = req.body.author;
            books.published_date = req.body.published_date;
            books.pages = req.body.pages;
            books.language = req.body.language;
            books.publisher_id = req.body.publisher_id;

            books.save().then(books => {
                res.json('Update Done');
            })
            .catch(err => {
                res.status(400).send('Unable Update Data to Database');
            });
        }
    });
});

bookRouter.route('/books/:id?').get(function(req,res){
    Book.findByIdAndRemove({ id: req.params.id}, function(err, books){
        if(err) res.json(err);
        else res.json('Sucessfully Removed');
    });
});

module.exports = bookRouter;