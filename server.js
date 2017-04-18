var express = require('express');
var app = express();

app.use('/api/whoami', function(req, res){
    var ip = req.headers['x-forwarded-for'];
    var userAgent = req.headers['user-agent'];
    var lang = req.headers['accept-language'].split(',')[0];
    var data = {
        'ip-address':ip,
        'language':lang,
        'software':userAgent
    }
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(data));
});
app.listen(8080);