import http from 'http';
import { Bookcase } from "./models.js";
import cors from 'cors';


// Code to run express 
'use strict'
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route
app.use(express.json()); //Used to parse JSON bodies
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
      console.log(bookcases)
      res.render('home', { bookcases });
    })
    .catch(err => next(err))
  });
// return all records


//API Routes

app.get('/api/bookcases', (req,res) => {
  Bookcase.find({}).lean()
    .then((bookcases) => {
      if (bookcases.length > 0) {
    res.json(bookcases);
    console.log(bookcases)
  } else {
    return res.status(500).send('--Database Error occurred--app.js 62');
  }
  })
});

app.get('/api/bookcases/:name', (req, res, next) => {
 
  const name = req.params.name;
  console.log(req.params.name)
  Bookcase.findOne({name:req.params.name }).lean()
    .then(name => {
      res.json(name)
     
   })
    .catch(err => next(err));
});
  
      // if(quote) {
      //     res.render('detail', quote);
      //     //res.json(quote);
      // }else{
      //     res.status(404).json({message: "Not a valid Quote id..."});
      // }




 // send plain text response
 app.get('/about', (req,res) => {
  res.type('text/plain');
  res.send('About page is here');
 });


app.get('/detail', (req, res) => {
    //const quote = await records.getQuote(req.params.id);
    const itemId = req.query.id;
    return Bookcase.findOne({ _id: itemId })
    .lean()
    .then(quote => {
        console.log(quote);
        if(quote) {
            res.render('detail', quote);
            //res.json(quote);
        }else{
            res.status(404).json({message: "Not a valid Quote id..."});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
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
