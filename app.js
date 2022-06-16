var app = require('express')();

app.get('/', function(req, res, next) {
    res.send('default get');
});

app.get('/health', function(req, res, next) {
    res.status(200).send('health check');
});


app.use(function(req, res) {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(8081, function() {
    console.log("Server started port 8081");
});