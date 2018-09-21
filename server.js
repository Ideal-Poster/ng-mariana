//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// Send all other requests to the Angular app
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on http://localhost:${port}/`));

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};  // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
