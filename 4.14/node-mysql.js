var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'vue2008'
});

connection.connect();

connection.query('select user_id,user_name,email from p_users limit 10', function(error, results, fields) {
    console.log(results)
});