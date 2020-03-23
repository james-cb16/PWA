const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const cors = require("cors");
const bodyParser = require("body-parser")
const path = require("path")

var app = express();

var PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

app.use(express.static(path.join(__dirname, '/public')));

htmlRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
