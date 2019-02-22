const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');
// const history = require('connect-history-api-fallback');

// app.use(history())
app.use(cors())
app.use(parser.json())


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('holiday_builder')
  const experiences = db.collection('experiences')
  const experienceRouter = createRouter(experiences)
  app.use('/api/experiences', experienceRouter)

  const basket = db.collection('basket')
  const basketRouter = createRouter(basket)
  app.use('/api/basket', basketRouter)

  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
