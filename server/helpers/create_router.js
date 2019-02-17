const express = require('express')
const ObjectId = require('mongodb').ObjectID

const createRouter = function(collection){

  const router = express.Router()

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  router.get('/:id', (req, res) => {
    const id = req.params.id
    collection
    .findOne({_id: ObjectId(id)})
    .then((doc) => res.json(doc))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  router.get('/location/:location', (req, res) => {
    const location = req.params.location
    collection
    .find({location: location})
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  router.get('/category/:category', (req, res) => {
    const category = req.params.category
    collection
    .find({category: category})
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
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
          .then((result) => {
            res.json(result.ops[0]);
          })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
        }
      }
    })
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectId(id) })
    .then(result => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  return router
}


module.exports = createRouter
