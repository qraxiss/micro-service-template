const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// custom imports
const config = require("../config");
const { notFound, debug } = require('./middlewares')
const router = require('./routes')


// create app
const app = express()

// app plugins
app.use(helmet.hidePoweredBy({ setTo: "PHP 4.2.0" }));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));


// routes
app.use('/api', router)

// not found error
app.use(notFound);

// env handle
app.use(debug);


app.listen(config.PORT, config.HOST_NAME, () => {
  console.log(
    `Your Node app is running on ${config.HOST_NAME}:${config.PORT}`
  );
});


module.exports = app;
