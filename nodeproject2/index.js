const express = require("express");
const app = express();
const PORT = 3001;

require('./app/routes/routes.js')(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});