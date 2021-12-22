const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

var route = require('./router');
route(app);

// app.use('/auth',require('./middleware'));


app.listen(3000, () => {
    console.log(`Server started on port`);
});