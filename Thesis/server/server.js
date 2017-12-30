var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost', 
	user: 'root', 
	password: 'dbswldud', 
	database: 'MentalHealth'
});

var app = express();
var compiler = webpack(config);

app.use(express.static('./public'));

app.use('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
})

// connection.connect(function(err){
// 	if(err) {
// 			throw(err);
// 			console.log("There was an error in connecting the database.");
// 		}	
// 	console.log("Database is connected.");
// });

// app.get("/query",function(req,res){
// 	connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', 
// 	function(err, rows) {
// 		// connection.end();
// 	  if (!err){
// 	  	res.send(rows);
// 	    console.log('The rows are being returned.');
// 	  }	
// 	  else {
// 	    console.log('Error while performing Query.');
// 	  }
// 	 });
// });

// app.get('/interface', function (req, resp) {
// 		resp.sendFile('index.html', {root: path.join(__dirname, '../client')})
// });


// 		console.log("Database is connected.");
// 		connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"',
// 			function (err, rows){
// 				if(!err){
// 					// console.log(rows);
// 					// res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
// 					res.send(rows);
// 					// res.render('client/index.html', {rows: rows});
// 					// return callback(err, rows);
// 				}
// 				else{
// 					throw(err);
// 					console.log('Error while performing Query.');
// 				}
// 			// console.log("wtf is this shit");
// 		});
// 		// res.end('Success!');
// 	// 	// connection.end();
// 	});

// });

var port = 4000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});

// app.get('/', function (req, resp) {
	// 	resp.sendFile('index.html', {root: path.join(__dirname, '../client')})
	// });
	// app.post('/', function (req, resp) {
	// 	var user = req.body;
	//   // Do a MySQL query.
	//   var query = connection.query('SELECT * FROM MentalHealth.category_description WHERE category="sleep"', user, function(err, result) {
	//     // Neat!
	//   });
	//   res.end('Success');

	// })
