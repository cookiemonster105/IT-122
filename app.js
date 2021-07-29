import http from 'http';


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
//import { getAll, getItem } from './data.js';
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
app.get('/', (req,res) => {
  res.render('home',{bookcases : getAll()});
 });


 // send plain text response
 app.get('/about', (req,res) => {
  res.type('text/plain');
  res.send('About page is here');
 });

  // send plain text response
  app.get('/detail', (req,res) => {
    //res.type('text/plain');
    //res.send('detail ifo page is here');
    res.render('detail',{bookcases : getItem()});
    //res.end (JSON.stringify(getItem(query.name)));
    //res.render (JSON.stringify(getItem(query.name)));
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








