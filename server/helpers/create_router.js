const express = require('express')
const ObjectId = require('mongodb').ObjectID

const createRouter = function(collection){

  const router = express.Router()

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  })

  router.get('/:id', (req, res) => {
    const id = req.params.id
    collection
    .find({_id: ObjectId(id)})
    .toArray()
    .then((docs) => res.json(docs))
  })

  router.get('/location/:location', (req, res) => {
    const location = req.params.location
    collection
    .find({location: location})
    .toArray()
    .then((docs) => res.json(docs))
  })

  router.get('/category/:category', (req, res) => {
    const category = req.params.category
    collection
    .find({category: category})
    .toArray()
    .then((docs) => res.json(docs))
  })

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .findOne(newData, function(err, success){
      if(err){
        console.log(err);
      }
      else {
        if(success == null){
          collection
          .insertOne(newData)
          .then(() => {
            collection
            .find()
            .toArray()
            .then((docs) => res.json(docs));
          });
        }
      }
    })
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectId(id) })
    .then(() => {
      collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    })
  });

  return router
}


module.exports = createRouter
