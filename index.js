const express = require("express");
const app = express();
const dotenv = require('dotenv');

// set the view engine to ejs
app.set('view engine', 'ejs');

//load public folder
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
// app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// load routers
const routers = require("./routes/routers.js");
app.use("/", routers);

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 3000;

// / mongodb connection using connection.js file
const connectDB = require('./routes/connection');
connectDB();

//Add these headers, very important!
app.use(function (req, res, next) {
    //allow all origins
    res.header("Access-Control-Allow-Origin", "*");

    //allow headers "Origin", "X-Requested-With", "Content-Type"
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Unable to start the server on port ${PORT}`);
    }
    console.log(`This HTTP server is running on port ${PORT}`);
});