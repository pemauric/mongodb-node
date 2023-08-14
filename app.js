const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./db/conn'); 
const port = 3000

const productRoutes = require('./routes/products.routes');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');   

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json());

app.use('/', productRoutes)


app.listen(port, () => {
    console.log('Listening on port 3000');
    console.log('http://localhost:3000');
});