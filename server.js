// Get the packages we need
var express = require('express');
// Create our Express application
var app = express();
//path library
var path = require('path');
// Use environment defined port or 3000
var port = process.env.PORT || 3000;
// Create our Express router
var router = express.Router();


app.use(express.static('public/', { maxage: '24h' }));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


// app.get('*', function(req, res) {
//   res.sendfile(path.resolve('public','index.html'));
// });

// Register all our routes with /api
app.use('/api', router);

app.listen(port, function() {
  console.log('Server start at port ' + port);
});
