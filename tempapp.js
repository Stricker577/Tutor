//first install express via the following
//npm install express ejs

const express = require('express');
const path = require('path');

const app = express();

// Set 'ejs' as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve the index.ejs file when the root URL is accessed
app.get('/', (req, res) => {
    res.render('index', { title: 'Hello World' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
