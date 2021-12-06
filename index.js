require("dotenv").config();
const express = require("express");

const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');
const Route = require("./routes/users");
app.use("/api", Route);
const mongodb = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            },
            (error, result) => {
                error ? console.error("Mongo", error) : console.log("Mongo Connected");
            }
        );
    } catch (error) {
        console.error(error);
    }
};

app.listen(process.env.PORT, async () => {
    console.log(`Environment:`, process.env.PORT);
    await mongodb();
});