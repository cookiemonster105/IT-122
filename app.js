import http from 'http';

// import function from data.js
import { getAll, getItem } from './data.js';

import { parse } from "querystring";

http.createServer(
   (req, res) => {

    
var path = req.url.toLowerCase();

  let url = req.url.split("?");  // separate route from query string
  let query = parse(url[1]); // convert query string to a JS object
  console.log(query);
  console.log(query.name);

switch(url[0]){
    case '/':

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end (JSON.stringify( getAll()));

        break;

    case '/about':
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end ('About Page');
        res.end (JSON.stringify(getAll, getItem));
        break;

    case '/detail':
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end (JSON.stringify(getItem(query.name)));



        break;
    

    default:
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end ('Nothing here not found');
        break;

}
  
  }
).listen(process.env.PORT || 3000);







