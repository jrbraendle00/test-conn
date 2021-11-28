var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {

    var sql = require('mysql');

    // config for your database
    /*   var config = sql.createConnection({
          host: 'localhost',
          user: 'wtdAdmin',
          password: 'EhH`44G^Ba?N?Fz@',
          database: 'wtd'
      }); */
    var config = sql.createPool({
        host: 'us-cdbr-east-04.cleardb.com',
        user: 'baeffcfa0361e8',
        password: 'd75d807f',
        database: 'heroku_f4a58d3b92ef321'
    });
    //mysql://baeffcfa0361e8:d75d807f@us-cdbr-east-04.cleardb.com/heroku_f4a58d3b92ef321?reconnect=true
    //baeffcfa0361e8
    //

    module.exports = config;

    // connect to your database
    //config.connect(function(err) {

    //if (err) console.log(err);

    var sql = "select * from task_list";
    config.query(sql, function(err, result) {
        if (err) throw err;
        console.log("record retrieved");
        res.send(result);
    });



    var listname = Math.random();

    //sql = "INSERT INTO task_list(task_list_name, list_complete) VALUES ('Test List " + listname + "', 0);"
    /* config.query(sql, function(err, result) {
        if (err) throw err;
        console.log("record retrieved");
        //res.send(result);
    });
 */

    //});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

/*
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.

// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
}) */