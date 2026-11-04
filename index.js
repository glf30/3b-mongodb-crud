
const express = require("express");
const app = express();
const logger = require("morgan");



app.use(express.json());
app.use(logger("dev"));


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`);

});
