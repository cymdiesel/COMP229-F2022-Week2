const connect = require('connect');
const app = connect();

function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Good Bye World');
};


app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);