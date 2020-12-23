import mongoose from 'mongoose';

const {Schema} = mongoose;

const movieschema = new Schema({
  name: String,
  director: String,
  genre: Array,
  imdb_score: String,
  '99popularity': String,
});

const Movie = mongoose.model('movies', movieschema);

export default Movie;