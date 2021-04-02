
const express = require('express');
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const jokeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    joke: String,
    type: String,
    image: String,
    like: Number
  });
const Joke = mongoose.model('joke',jokeSchema);


app.post('/api/joke', async (req, res) => {
    const joke = new Joke({
        id: req.body.id,    
        name: req.body.name,
        joke: req.body.joke,
        type: req.body.type,
        image: req.body.image,
        like: req.body.like
    });
app.get('/api/joke', async (req, res) => {
    try {
        let jokes = await Joke.find();
        this.$root.$data.Jokes = response.data;
        res.send(jokes);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
    console.log(item);
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/joke/:id', async (req, res) => {
    try {
      await Joke.deleteOne({
        id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  app.put('/api/joke/:id', async (req, res) => {
    try {
      let item = await Item.findOne({
       id: req.params.id
      });
      item.like = req.body.like;
      item.save();
      res.send(item);
    } 
   catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
 });




app.listen(3000, () => console.log('Server listening on port 3000!'));

