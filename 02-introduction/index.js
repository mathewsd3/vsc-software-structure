// console.log("Hello !");

/*
To start a new node
 site project
-create a new folder
-open in terminal (right click) with Visual Studio Code or MS-DOS command prompt
-npm init
-type enter many times to accept all default parameters
-write some js code in a filename.js
-open in terminal (right click)
-to run the code: node filename.js
-to stop the server ctrl-c
*/

'use strict'
// forces variable declaration before it can be used
// prevents typing mistakes in variable names
// force us to declare variables before using
// prevents typing mistake while using variables
var customerid=3

// customer_id=5

/* EXPRESS FRAMEWORK
-npm install express
-see https://expressjs.com/en/4x/api.html#express
*/

var express = require('express');
var app = express();

// serve any file in /static_html folder directly
// these files do not require any server side processing
// example http://localhost:8080/test.html

app.use(express.static('static_html')); // serve any file in /public folder


// ROUTES ------------------------------------------------------------------------------------------//

// HOME PAGE http://localhost:8080
/*
function functionA(){
    console.log("Hello class");
}

app.get('/',functionA);
*/

app.get('/',
  function (req, res){
        //res.send('Hello World');
        res.send("<h1>Hello World</h1>");
    }
);

// Table display page http://localhost:8080/nodepg_table
//return table from database
app.get('/nodepg_table',
    function(req, res){
        //query the db

        //format html output
        var html="<table><tr><th>id</th><th>col2</th><th>col3</th><th>col4</th><th>col5</th></tr>"
        // loop through rows and format output

        html+="</table>"
        res.send(html);
    }
)

// another route, /dawn
// http://localhost:8080/dawn

app.get('/dawn', function (req, res){
    res.send('Hello this is dawn');
});

// using my own module, see myFirstModule.js
var dt = require('./myfirstmodule');
console.log(dt.myDateTime()); // use module function

/*
// USING POSTGRES SQL
const { Client } = require('pg')

const DB = new Client({
    host: 'localhost',
    port: 5432,
    database: 'software_structure',
    user: 'postgres',
    password: 'postgres'
})


DB.connect((error) => {
    if (error) {
        console.error('Database connection error: cannot connect to software_structure', error.stack)
    } else {
        console.log('connected to database software_structure')
    }
})

// asynchronous - sending query to db, continue executing, then result, then callback
// not wait for result
// continue executing
DB.query('SELECT * FROM nodepg',
    (error, result) => {
        if (error) {
            throw error
        }

        //output all results
        console.log(result)

        //get only row count
        console.log(result.rowCount)

        // get table data
        console.log(result.rows)

        //get first row
        console.log(result.rows[0])

        //get first row id
        console.log(result.rows[0].id)

        // disconnect from server
        DB.end()
    }
)
*/
// --------- testing the DAO module
const DB = require('./src/dao')

module.exports = DB

DB.connect();
DB.query("select count(*) as nb_rows from nodepg", [],
    function(results){
        console.log("callback function is executed")
         console.log(results.rows[0].nb_rows)
        // console.log(results)
    }
)

DB.query('INSERT INTO nodepg (stringField, numberField, booleanField) VALUES ($1, $2, $3)',
    ['chaîne de caractères 4', 669, false],
    function (results){
        console.log("inserted a new row")
        console.log(results.rowCount)
    }
)

//DB.disconnect()
// -------------------------------------------------------------------------

//Last line of code - start server - on port 8080
app.listen(8070, function(){
    console.log('Example app listening on port 8070!')
});


/*
// include the http library
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

*/