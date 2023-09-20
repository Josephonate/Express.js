const express = require('express');
const path = require('path');
const fs = require('fs');


const uuid = require('../helpers/uuid');
const app = express();

app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.post('/api/notes', (req, res) =>
    res.sendfile(path.join(__dirname, '/public/pages/notes.html'))
);