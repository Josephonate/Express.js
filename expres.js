const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/api/notes')

app.listen(PORT, () => {
    console.log(`server available at https://localhost:${PORT}`);
});