const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');

const temperatureRoute = require('./routes/temperatureRoute');
const viewRoute = require('./routes/viewRoute');

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));

app.use('/', viewRoute);

app.get('/greetings', (req, res) => {
  res.status(200).json({
    greetings: 'Hello from greetings!',
  });
});

app.use('/api/v1/temperatures', temperatureRoute);

app.get('/test-html', (req, res) => {
  // i should use D3JS
  res.status(200).send(`<!DOCTYPE html>
  <html>
   <head>
    <meta charset="utf-8">
    <title>Тест всякого</title>
   </head>
   <body> 
    <div>
      <canvas id="myChart"></canvas>
    </div>
    <form>
     
     <p><input type="button" value=" Нажми меня неежно "></p>
    </form>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
   <script>
  
</script>
  </html>`);
});

app.get('/lo', (req, res) => {
  res.status(200).send(`<!DOCTYPE html>
<svg width="960" height="500"></svg>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src='/js/index.js' type='module'>



</script>`);
});

module.exports = app;
