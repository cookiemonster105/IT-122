let bookcase = [
{name : "Billy", type : "bookcase", height : 63, width : 79, price : 98, color : "white" },
{name : "Kallax", type : "shelf unit", height : 30, width : 57, price : 69.99, color : "white"},
{name : "Laiva", type : "bookcase", height : 24, width : 65, price : 19.99, color : "black"},
{name : "Eket", type : "Storage combination with feet", height : 27, width : 13, price : 62, color : "white"},
{name : "Hauga", type : "High cabinet with 2 doors", height : 27, width : 78, price : 298, color : "birch veneer/glass"},
{name : "Oxberg", type : "Bookcase with doors", height : 31, width : 79, price : 109, color : "black"},
{name : "Havsta", type : "Shelving unit with base", height : 24, width : 83, price : 169, color : "gray"}
];
// // Returns # of bookcases 
 console.log("bookcase length " + bookcase.length)

// Returns all bookcases 

    // //console.log(getAll);
    // const getAll = bookcase.map((name)(bookcaseAll) => {
    //     return bookcase.map(bookcase);
    //     };
    // console.log(getAll);


const getAll = () => {
         return bookcase;
 };





// Returns single bookcase
const getItem = (bookcaseName) => {
    return bookcase.find((name) =>{
        return name.name.toLowerCase() == bookcaseName.toLowerCase();
    });
}



// //Function to return bookcases that cost more than $72.00
// let filter = bookcase.filter((bookcase) => {
//     return bookcase.price > 72
// });

//  console.log(filter);

 //exports functions
export{getAll, getItem};
 