import { Bookcase } from "./models.js";

// return all records
Bookcase.find({}).lean()
  .then((bookscase) => {
    console.log(bookscase);
  })
  .catch(err => next(err));

// // return all records that match a condition
// Bookcase.find({"author": "Smith" }).lean()
//   .then((Bookcase) => {
//     console.log(bookcase);
//   })
//   .catch(err => next(err));

// // return a single record
// Bookcase.findOne({"title": "Dune" }).lean()
//   .then((boocaasek) => {
//       console.log(bookcase);;
//   })
//   .catch(err => next(err));

// insert or update a single record
// const newBookcase = {'name':'Finnby', 'type':'bookcase', 'height': '24', 'width' : '70' , 'price' : '30' , 'color' : 'black'  }
// Book.update({'title':'dune'}, newBook, {upsert:true}, (err, result) => {
//   if (err) return next(err);
//   console.log(result);
//   // other code here
// });
