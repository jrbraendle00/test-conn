var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'wtdAdmin',
    password: 'EhH`44G^Ba?N?Fz@',
    database: 'wtd'
});

con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
    /*     var sql = "INSERT INTO task_list (task_list_name, list_complete) VALUES ('Test List 2', '0')";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("record inserted");
        }); */


});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});