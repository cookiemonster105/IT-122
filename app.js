import http from 'http';
import { Bookcase } from "./models/models.js";
import cors from 'cors';
//const mongoose = require('mongoose')

// Code to run express 
'use strict'
import express, { Router } from 'express';

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
// // Get by query name
// app.get('/api/bookcases?name', (req, res, next) => {
//   res.send('Are you looking for a bookcase?? ${req.query.name}') 
//   const name = req.query.name;
//   console.log(req.query.name)
//   Bookcase.findOne({name:req.querys.name }).lean()
//     .then(name => {
//       res.json(name)
//          })
//      .catch(err => next(err));
//  });

//Get by name
app.get('/api/bookcases/:name', (req, res, next) => {
  //res.send('Are you looking for a bookcase? ${req.params.name}') 
  console.log(req.params.name)
  Bookcase.findOne({name:req.params.name }).lean()
    .then(name => {
      res.json(name)
     
   })
    .catch(err => next(err));
});

//Delete by name
app.get('/api/bookcases/delete/:name', (req, res, next) => {
 res.send('Are you deleting for a bookcase?') 
  console.log(req.params.name)
  Bookcase.deleteOne({name:req.params.name }).lean()
    .then(name => {
      res.json(name)
     
   })
    .catch(err => next(err));
});

app.post('/api/bookcases/add', (req,res,next) => {
  Bookcase.updateOne({'name':req.body.name}, req.body, {upsert:true}, (err, result) => {
      if (err) return next(err);
      console.log(result);
      // .catch(err => next(err));
      res.json({"message": "Added ne Bookcase"})
  });
});


//{name : "Kallax", type : "shelf unit", height : 30, width : 57, price : 69.99, color : "white"},
 
//   res.send('Are you looking to add a bookcase?') 
  
//  const addBookcase ={
// id: new mongoose.Types.ObjectId()
//   if(!req.body) {
//     return res.status(400).send('request body is missing');
//   }
  
//  const newbookcase = new record{
//    _id:  
//     name: req.body.name
//     type: String,
//     height: Number,
//     width: Number,
//     price: Number,
//     color: String
  
//   }
//   const model = new BookcaseModel(req.body)
//   model.save()
//     .then(doc => {
//       if(!doc || doc.length === 0) {
//         return res.status(500).send(doc)
//       }
//       res.status(201).send(doc)
//     })
//     .catch(err => {
//       res.status(500).jason(err)
//     })


// //Add a new bookcase via post
// app.post('/api/bookcases/add/:name', (req, res, next) => {
//   res.send('Are you looking to add a bookcase?') 
  
//   const addBookcase ={
// id: new mongoose.Types.ObjectId()
//   if(!req.body) {
//     return res.status(400).send('request body is missing')
  
//   let model = new {
//   name: { type: String, required: true },
//   type: String,
//   height: Number,
//   width: Number,
//   price: Number,
//   color: String
// }
// }
   
// });

//   .catch(err => next(err));

 // define 404 handler
 app.use((req,res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
 });

 app.listen(app.get('port'), () => {
  console.log('Express started');
 });
