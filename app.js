//require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const bodyParser = require('body-parser');

const navRoutes = require('./routes/navRoutes');

//create the app
const app = express();

//configure the app
let port = 3000;
let host = '0.0.0.0';
app.set('view engine', 'ejs');

//connect to database
mongoose.connect('mongodb://127.0.0.1:27017/tutor', 
            {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    //start the server
    app.listen(port, host, ()=>{
        console.log('Server is running on port', port);
    })
})
.catch(err=>console.log(err.message));

//mount middlware
app.use(
    session({
        secret: "ajfeirf90aeu9eroejfoefj",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({mongoUrl: 'mongodb://127.0.0.1:27017/tutor'}),
        cookie: {maxAge: 60*60*1000}
        })
);
app.use(flash());

app.use((req, res, next) => {
    res.locals.user = req.session.user||null;
    res.locals.errorMessages = req.flash('error');
    res.locals.successMessages = req.flash('success');
    next();
});

app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

//set up routes
app.get('/', (req, res)=>{
    res.render('index');
});

//set up using all routers
app.use('/', navRoutes);

//error handling
app.use((req, res, next)=> {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

//status handling
app.use((err, req, res, next)=> {
    console.log(err.stack);
    if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    res.status(err.status);
    res.render('error', {error: err});
});