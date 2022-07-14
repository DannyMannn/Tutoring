const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser'); // parse CRUD data
const cors = require('cors'); //
let router = express.Router(); // for our API

let dbOperations = require('./dboperations'); 

// express app
const app = express()
// register view engine (for dynamic data)
app.set('view engine', 'ejs'); //ejs automatically looks for a view folder for its views

//creating middleware
//middleware for static files, this tells the browser what folder its allowed to access
app.use(express.static('public'));
//access request.body, form data
app.use(bodyParser.urlencoded({ extended: true })); //csrf token? similar? it gets used by a request post object
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//3rd party middleware
app.use(morgan('dev'));

app.get("/api", (req, res) => {
    // res.json({"users":[
    //     "danny",
    //     "Wendy",
    //     "Miguel"
    // ]});
    dbOperations.getUsers().then(users => {
        //console.log(users.flat());
        res.json({
            "users":users.flat()
        })
    })
})

//The server will run on port 5000 and React will run on port 3000.
app.listen(5000, () => {
    console.log("Server started on port 5000.");
})