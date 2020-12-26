import {useState} from 'react';
import Card from '../../components/Card';
import Label from '../../components/Label';
import Movie from '../Movie';
import './styles.css';

const Home = ({movieList}) => {
  const [movieModal, setMovieModal] = useState();
  return (
    <div className="home">
      <div className="movie-grid">
      {
        movieList.map((movie, index) => 
          <Card title={movie.name} key={`${index}`}>
            <p>by- {movie.director}</p>
            <p>IMDB score {movie.imdb_score}</p>
            <p>99popularity score {movie['99popularity']}</p>
            <span className="genre-list">genre {movie.genre?.map((it, index)=> 
            (<Label key={`${index}`}>{it}</Label>))}</span>
          </Card>
          )
      }
      </div>
      <Movie movieModal={movieModal} setMovieModal={setMovieModal}/>
    </div>
  );
}

export default Home;        
