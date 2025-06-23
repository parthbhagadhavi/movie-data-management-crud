const mongoose=require('mongoose')


const user=mongoose.Schema({

    title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  director: {
    type: String
  },
  cast: {
    type: String,
    required: true

  },
  duration: {
    type: Number,
    required: true

  },
  language: {
    type: String,
    required: true

  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: true

  },
  description: {
    type: String,
    required: true

  },
  poster: {
    type: String ,
    required: true

  },
  releaseDate: {
    type: Date,
    required: true

  },
  trailer: {
    type: String  ,
    required: true

  },
})

const moviedata=mongoose.model("moviedata",user)

module.exports=moviedata