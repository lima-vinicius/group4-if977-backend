import swaggerUi from "swagger-ui-express"
var express = require('express');
import SwaggerFile from "../swagger.json"

var universityRouter = require('./routes/university');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.use(express.json());

app.use('/', universityRouter);
app.use('/users', usersRouter);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(SwaggerFile)
);

const PORT = 3000;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
  )