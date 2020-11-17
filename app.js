const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const app = express();

const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(expressLayouts);

// Set templateing engine

app.set('view engine', 'ejs')
app.set('layout', './layouts/app')

// Application route
const authRoutes = require('./routes/authRoutes')
const accountRoutes = require('./modules/accounts/routes/accountRoutes')
const pageRoutes = require('./routes/pageRoutes')
const productRoutes = require('./routes/productRoutes')

app.use('/pages', pageRoutes)
app.use('/auth', authRoutes)
app.use('/accounts', accountRoutes)
app.use('/products', productRoutes)



app.listen(port)