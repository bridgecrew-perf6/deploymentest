var app = require('express')();

app.get('/', function(req, res, next) {
    res.send('default get');
});

app.get('/health', function(req, res, next) {
    res.status(200).send('health check');
});

app.listen(8081, function() {
    console.log("Server started port 8081");
});