const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (req, resp) => {
    resp.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is up and running!');
});