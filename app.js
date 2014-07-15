//setup Dependencies
var connect = require('connect')
    , port = (process.env.PORT || 8081);
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname + '/public'))
    .listen(port);
