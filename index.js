const express = require('express');
const helmet = require('helmet');
const app = express();
let personRoute = require('./src/routes/person');
let customerRoute = require('./src/routes/customer');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req,res,next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});

const PORT = process.env.PORT || 3000;
// add some security-related headers to the response
app.use(helmet());

app.listen(PORT, () => console.info(`server is started on port ${PORT}`));


app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

// Handler for 404 Not Found Page
app.use((req,res,next) => {
    res.status(404).send('Erreur 404 - Page Introuvable');
});

// Handler for Error 500
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, 'public/500.html'));

});

module.exports = app;
