import swaggerUi from "swagger-ui-express"
import routeUniversity from './routes/university';
import SwaggerFile from "../swagger.json"
import express from 'express'
import bodyParser from 'body-parser'


require('dotenv').config();

const app = express();

// view engine setup
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', routeUniversity)

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(SwaggerFile)
);

const PORT = 3000;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
  )