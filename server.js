const express = require('express');
const path = require('path');
const page = express();
const port = 3323;

page.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

page.listen(port, () => {
    console.log('hi port' + port)
}) 