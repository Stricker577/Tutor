//first install express via the following
//npm install express ejs

const navRoutes = require('./routes/navRoutes');
const express = require('express');
const path = require('path');

const app = express();

// Set 'ejs' as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Serve the index.ejs file when the root URL is accessed
app.get('/', (req, res) => {
    res.render('index');
});

//set up using all routers
app.use('/', navRoutes);

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
}); 
