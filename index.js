var express = require('express');
var app = express();

app.get('/', function(req, res) {

    var sql = require('mysql');

    // config for your database
    var config = sql.createConnection({
        host: 'localhost',
        user: 'wtdAdmin',
        password: 'EhH`44G^Ba?N?Fz@',
        database: 'wtd'
    });


    // connect to your database
    config.connect(function(err) {

        if (err) console.log(err);

        var sql = "select * from task_list";
        config.query(sql, function(err, result) {
            if (err) throw err;
            console.log("record retrieved");
            res.send(result);
        });


    });
});

var server = app.listen(5000, function() {
    console.log('Server is running..');
});