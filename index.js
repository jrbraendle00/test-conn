/*v ar express = require('express');
var app = express();
var port = process.env.PORT || 3000;

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

var server = app.listen(port, function() {
    console.log('Server is running..');
}); */

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})