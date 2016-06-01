var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/:domain', function(request, response) {
  response.render('pages/domain', {domain: request.params.domain});
});

app.get('/:domain/courses', function(request, response) {
  response.render('pages/courses', {domain: request.params.domain});
});

app.get('/:domain/material', function(request, response) {
  response.render('pages/material', {domain: request.params.domain});
});

app.get('/:domain/sessions', function(request, response) {
  response.render('pages/sessions', {domain: request.params.domain});
});

app.get('/:domain/users', function(request, response) {
  response.render('pages/users', {domain: request.params.domain});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


