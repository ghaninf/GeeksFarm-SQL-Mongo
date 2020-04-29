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
    // {
    //     "_id": "001",
    //     "title": "Book 28",
    //     "author": "Ghani",
    //     "published_date": ISODate("2010-09-24T00:00:00Z"),
    //     "pages": "200",
    //     "language": "Indonesia",
    //     "publisher_id": "ghaninf"
    // }
    app.post('/books', function(req,res,next){
        const { _id, title, author, published_date, pages, language, publisher_id } = req.body;
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
        .catch(error =>
            res.json({
                error: true,
                error: error
            })
        )
    });

    // GET localhost:port/books/id
    app.get("/books/:id?", (req, res) => {
        const book_id = req.params.id;
        console.log("ID : "+book_id);
        model.Books.findOne(
        {
            where: {
                id: book_id
            }
        })
        .then( book =>
            res.json({
                error: false,
                data: book
            })
        )
        .catch( error =>
            res.json({
                error: true,
                error: error
            }) 
        )
    });
    
    // PUT localhost:port/books/id
    app.put("/books/:id?", function(req,res){
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

    // DELETE localhost:port/books/:id
    app.delete("/books/:id?", (req, res) => {
        const book_id = req.params.id;
        model.Books.destroy({
            where: {
                id: book_id
            }
        })
        .then( book =>
            res.json({
                error: false,
                message: `Book ID = ${book_id} has been deleted.`
            })
        )
        .catch( error =>
            res.json({
                error: true,
                error: error
            }) 
        )
    });
};