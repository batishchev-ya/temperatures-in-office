const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loopController = require('./controlers/loopController');

process.on('uncaughtException', (err) => {
  console.log('UNHANDLED EXCEPTION!💥 Shutting down...');
  console.log(err);
  process.exit(1);
});

// process.on('error', (err) => {
//   console.log('Some error occured');
//   process.exit(1);
// });

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE_CONNECT.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successfull!');
  loopController.startLoop();
});

const port = 3000;
const server = app.listen(port, () => {
  console.log(`App runing on ${port}...`);
});
