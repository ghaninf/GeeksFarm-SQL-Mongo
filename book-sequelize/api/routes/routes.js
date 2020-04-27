var model = require('../models/index.js');

module.exports = function(app){
    // GET /books
    app.get('/books', function(req,res,next){
        model.Books.findAll({})
        .then(books => 
            res.json({
                data: books
            })    
        )
        .catch(error =>
            res.json({
                data: [],
                error: error
            })
        )
    });

    // POST /books
    app.post('/books', function(req,res,next){
        const { _id, title, author, published_date, pages, language, publisher_id } = req.body;
        // console.log( req.body );
        // console.log( _id, title, author, published_date, pages, language, publisher_id );
        model.Books.create({
            _id : _id,
            title: title,
            author: author,
            published_date: published_date,
            pages: pages,
            language: language,
            publisher_id: publisher_id
        })
        .then(books =>
            res.status(201).json({
                data: books,
                message: "Data has been created"
            })    
        )
    });

    // GET /books/:id
    app.get('/books/:id', function(res,req){
        const book_id = req.params.id;
        const { _id, title, author, published_date, pages, language, publisher_id } = req.body;
        model.Books.findById({
            _id : _id,
            title: title,
            author: author,
            published_date: published_date,
            pages: pages,
            language: language,
            publisher_id: publisher_id
        },
        {
            where: {
                id: book_id
            }
        }
        )
        .then(books =>
            res.json({
                error: false,
                message: "Specify data has been selected"
            })    
        )
        .catch(error =>
            res.json({
                error: true,
                error: error
            })    
        )
    });
    
    // PUT /books/:id
    app.put('books/:id', function(req,res){
        const book_id = req.params.id;
        const { _id, title, author, published_date, pages, language, publisher_id } = req.body;
        model.Books.update({
            _id : _id,
            title: title,
            author: author,
            published_date: published_date,
            pages: pages,
            language: language,
            publisher_id: publisher_id
        },
        {
            where: {
                id: book_id
            }
        }
        )
        .then(books =>
            res.json({
                error: false,
                message: "Data has been updated"
            })    
        )
        .catch(error =>
            res.json({
                error: true,
                error: error
            })    
        )
    });

    // DELETE /books/:id
    app.delete('books/:id', function(res,req,next){
        const books_id = req.params.id;
        model.Books.destroy({
            where: {
                id: books_id
            }
        })
        .then(status =>
            res.json({
                error: false,
                message: "Data has been delete"
            })
        )
        .catch(error =>
            res.json({
                error: true,
                error: error
            })
        )
    });
};