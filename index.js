/**var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
var Book = require('./Book.model');
const port = 3000

mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true});

app.get('/',function(req,res){
    res.send('happy to be here')
});

app.get('/books', function(req,res){
 console.log('getting all books');
 var query = Book.find({});
 query.exec(function(err,books){
    if(err){
        res.send('error has occured');
    } else {
        res.json(books);
    }
 })
});

app.get('/books/:id', function(req,res){
    console.log('getting one books name');
    var query = Book.findOne({_id:req.params.id});
    query.exec(function(err,book){
       if(err){
           res.send('error has occured');
       } else {
           res.json(book.category);
       }
    })
   });

   app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

**/
require('babel-register');
require('babel-polyfill');
require('./server');
