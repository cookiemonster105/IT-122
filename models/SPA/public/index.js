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
