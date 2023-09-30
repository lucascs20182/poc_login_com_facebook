// import '../config/module-alias'
// import { HelloController } from '@/application/controllers/hello';

// const hello = new HelloController();
// console.log(hello.say('Node'))
// console.log(hello.say())

import express from 'express';
import { Pool, Client } from 'pg';
const connectionString = 'postgres://admin:MWC9yfmcyyolZxy5xbLvBywLUTu7NoK9@dpg-ckbn9iect0pc73fbro00-a.oregon-postgres.render.com/dd_digital_helper_db?ssl=true';


const client = new Client({
  connectionString,
});

const app = express();
const port = 3000;

app.get('/', (req, response) => {
  client.connect();

  // client.query(`INSERT into example (texto) values('Qualquer coisa');`, (err, res) => {
  client.query(`SELECT * FROM example;`, (err, res) => {
    if (!err) {
      console.log(res.rows);
      response.send(`testando query: ${res.rows[1].texto.toLowerCase()}`);
    } else {
      console.log(err.message);
      response.send(`algum erro aconteceu:\n${err.message}`);
    }

    client.end;
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
