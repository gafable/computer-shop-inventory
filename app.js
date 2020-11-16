const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const app = express();

const port = 3000

app.use(bodyParser.json())

// Set templateing engine
app.use('view engine', 'ejs')
app.use(expressLayouts);
app.set('layout', './layouts/app')



// Application route 

app.get('/', (request, response) => {
    response.render('auth/login')
})

app.listen(port)