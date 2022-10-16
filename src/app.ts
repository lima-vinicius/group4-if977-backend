import swaggerUi from "swagger-ui-express"
import routeUniversity from './routes/university';
import routeStudent from './routes/users';
import routeKnowledge from './routes/knowledge';
import routeSubject from './routes/subjects';
import routeCard from './routes/cards'


import SwaggerFile from "../swagger.json"
import express from 'express'
import bodyParser from 'body-parser'




require('dotenv').config();

const app = express();


// view engine setup
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/university', routeUniversity);
app.use('/student', routeStudent);
app.use('/knowledge', routeKnowledge);
app.use('/subject', routeSubject);
app.use('/card', routeCard);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(SwaggerFile)
);

const PORT = 3000;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
  )

  export default server;