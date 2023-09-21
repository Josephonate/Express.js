const express = require('express');
const app = express();
const html = require('./routes/html')
const notes = require('./routes/api')
const PORT = process.env.PORT || 3001;


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api', notes);
app.use('/', html);

app.listen(PORT, () => {
    console.log(`server available at http://localhost:${PORT}`);
});