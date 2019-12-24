'use strict'

// npm install cors
// accept request from other websites Cross Origin
var cors = require('cors')

var DB = require('./dao')

// use express framework ----------------------------------------------
var express = require('express');
var app = express();

app.use(cors())


// for form inputs to do request.body.some_form_input_name
// new way for Express 4.16+ the bodyparser is now included in express
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies
//---------------------------------------------------------------------

DB.connect()

DB.query("select * from web_users",[],
    function(results){
        console.log(results.rows)
    }
)

// ROUTES  ------------------------------------------------

//get all users
app.get('/users/login',
    function(request, response){
        //more code here
        response.send("this is the login reply")
    }
)

//get all users
app.get('/users',
    function(request, response){
        DB.query("select * from web_users order by id asc", [],
            function(results){
                var html_string = JSON.stringify(results.rows)
                console.log(html_string)
                response.send(html_string)
                //response.send("Hello World")
            }
        )
    }
)

//get 1 user
//route/ path/ uri
// passing parameter thru the uri example: http://localhost:3000/users/34
app.get('/users/:id',
    function(request, response){
        // users/34 or 1=1   -- sql injection
        // building my own query string -- risk of sql injection !
        /* sqlStr="select * from web_users where id="+request.params.id+" order by id asc"
        DB.query(sqlStr, [],
            function(results){

            }
            )*/
        DB.query("select * from web_users where id=$1 order by id asc", [request.params.id],
            function(results){
                if(results.rowCount==1)
                {
                    var output={}
                    output.message="OK"
                    output.data=results.rows
                    //html_string = JSON.stringify(results.rows)
                    var html_string = JSON.stringify(output)
                    console.log(html_string)
                    // tell the client i'm sending out a javascript object
                    // in the form of a string
                    // response.set('Content-Type', 'application/json')
                    response.set('Content-Type', 'text/html')
                    response.status(200).send(html_string)
                }
                else
                {
                    // tell the client i'm sending out html code
                    console.log("test123")
                    response.set('Content-Type', 'text/html')
                    response.status(404).send("<b>user id "+request.params.id+" not found !</b>")
                }
            }
        )
    }
)

//delete 1 user
app.delete('/users/:id',
    function(request, response){
        DB.query("delete from web_users where id=$1", [request.params.id],
            function(results){
                console.log(results)
                if(results.rowCount != 0)
                {
                    console.log("deletion successful")
                    var output={}
                    output.message="Row Deleted Successfully"
                    output.value="OK"
                    var html_string=JSON.stringify(output)
                    console.log(html_string)
                    console.log(output)
                    response.set('Content-Type', 'application/json')
                    response.status(200).send(html_string)
                }
                else
                {
                    console.log("Row not found .. error")
                    var output={}
                    output.message="Error .. Row Not Found"
                    output.value="Deletion Unsuccessful"
                    var html_string=JSON.stringify(output)
                    console.log(html_string)
                    console.log(output)
                    response.set('Content-Type', 'application/json')
                    response.status(404).send(html_string)
                }
            }
        )
    }
)

/*
//update 1 user
app.put('/users/:id',
    function(request, response){
        DB.query("delete from web_users where id=$1", [request.params.id],
            function(results){
                html_string = JSON.stringify(results.rows)
                console.log(html_string)
                response.send(html_string)
            }
        )
    }
)
UPDATE table_name SET field1 = new-value1, field2 = new-value2
[WHERE Clause]
*/

//update 1 user
app.put('/users/:id',
    function(request, response){
        DB.query("UPDATE web_users SET username = 'cx', password = 're' WHERE id=$1", [request.params.id],
            function(results){
                response.send("Record updated")
            }
        )
    }
)




//create/insert 1 new user
// to test make a form with <form action="/users" method="POST">.......
/*
app.post('/users/:username/:password',
    function(request, response){
        DB.query("INSERT INTO web_users ( username, password ) VALUES ( $1, $2 )", [request.params.username,request.params.password],
            function(results){
                response.send("Row inserted successfully : values")
            }
        )
    }
)
*/

//create/insert 1 new user
// to test make a form with <form action="/users" method="POST">.......
// root for post users
// require body-parser from express, see top of this file
app.post('/users',
    function(request, response){
        console.log("------------------------------")
        console.log(request.body.username)
        DB.query("INSERT INTO web_users ( username, password ) VALUES ( $1, $2 )", [request.body.username,request.body.password],
            function(results){
                response.send("Row inserted successfully : values")
            }
        )
    }
)

 /*
 //-------------------
 function(request, response){
        console.log(request.body.username) // these are the form inputs
        console.log(request.body.password)
        response.send("this is the post reply")
    }
    DB.query("delete from web_users where id=$1", [request.params.id],
    function(results){
        html_string = JSON.stringify(results.rows)
        console.log(html_string)
        response.send(html_string)
    }
//------------------------
*/
// START SERVER ------------------------------------------
app.listen(3001, function(){
    console.log("User authentication service is running")
})