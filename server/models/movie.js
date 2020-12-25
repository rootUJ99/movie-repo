import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const movieschema = new Schema({
  name: String,
  director: String,
  genre: Array,
  imdb_score: String,
  '99popularity': String,
});

const MovieModel = model('movies', movieschema);

export default MovieModel;