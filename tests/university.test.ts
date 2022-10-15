import { createConnection } from "typeorm";
import request from 'supertest'
import router from '../src/routes/university'
import serve from '../src/app'

let connection, server;

beforeEach(async() => {
    connection = serve;
    await connection.synchronize(true);
    server = serve.listen(3000);
  });
  
  afterEach(() => {
    connection.close();
    server.close();
  });

it("POST user university", async () => {
    const response = await request(router).post('/register');
    console.log(response.body)
    expect(response.statusCode).toBe(200)
})

