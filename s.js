// import function from data.js
import { getAll, getItem } from './data.js';
console.log(getItem);


   
        //Function to return all bookcases (doesn't work)
let getAll = bookcase.forEach((bookcase) => {
    return (bookcase);
    });
    
    console.log(getAll);



    --------------------------------------
    
    //console.log(getAll);
    const getAll = (bookcase) => {
        return someValue;
        } 

    bookcase.forEach((bookcase) => {
        return (bookcase);
        });
        
        console.log(bookcase);

console.log("....................");

// Returns single bookcase
const getItem = (bookcaseName) => {
    return bookcase.find((name) =>{
        return name.name == bookcaseName;
    });
}



console.log(getItem('Oxberg'));





// //Function to return bookcases that cost more than $72.00
// let filter = bookcase.filter((bookcase) => {
//     return bookcase.price > 72
// });

//  console.log(filter);

 //exports functions
 export{getAll, getItem};