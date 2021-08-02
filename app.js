import http from 'http';
import { Bookcase } from "./models.js";

// Code to run express 
'use strict'
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies

//End of Express code

// Code to run handlebars
import exphbs from "express-handlebars"
import { getAll, getItem } from './data.js';
app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

//End of handlebars code
    
// const getItem = (name) =>{
//   return bookcases.find((name) =>{
//     return item.name.toLowerCase() ===
//     name.toLowerCase();
//   }); 
// };

// send static file as response --Code assignemt  

 // send content of 'home' view
// app.get('/', (req,res) => {
//   res.render('home',{bookcases : getAll()});
//  });

 // send content of 'home' view
 app.get('/', (req, res, next) => {
  Bookcase.find({}).lean()
    .then((bookcases) => {
      // respond to browser only after db query completes
      res.render('home', { bookcases });
    })
    .catch(err => next(err))
  });
// return all records


 // send plain text response
 app.get('/about', (req,res) => {
  res.type('text/plain');
  res.send('About page is here');
 });

  // send plain text response
  // app.get('/detail', (req,res) => {
  //   console.log(req.query.name); // display parsed querystring object
  //   res.render('detail',{bookcase : getItem(req.query.name)});    
  //  });

   app.get('/detail', (req,res,next) => {
    // db query can use request parameters
    Bookcase.findOne({ name:req.query.name }).lean() 
        .then((bookcases) => {
            res.render('detail', {result: bookcases} );
        })
        .catch(err => next(err));
});
 
 // define 404 handler
 app.use((req,res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
 });

 app.listen(app.get('port'), () => {
  console.log('Express started');
 });
//End code assignemt 3








