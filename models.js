
// mongo setup
import mongoose from 'mongoose';
const { Schema } = mongoose;

//Security
import {connectionString } from "./credentials.js";


mongoose.connect(connectionString, {
    dbName: 'SCCProject',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const bookcaseSchema = new Schema({
    name: { type: String, required: true },
    type: String,
    height: Number,
    width: Number,
    price: Number,
    color: String
   });
   
   export const Bookcase = mongoose.model('Bookcase', bookcaseSchema);
//end mongo setup