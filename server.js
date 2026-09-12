const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Tell Express to serve all static assets from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route to serve the index.html on the home path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
