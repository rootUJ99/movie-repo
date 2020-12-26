import {useEffect, useState} from 'react';
import {convertToken} from '../../utils'
import {useLocalStorage} from '../../hooks'
import Card from '../../components/Card';
import Label from '../../components/Label';
import Movie from '../Movie';
import './styles.css';
import Button from '../../components/Button';

const Home = ({movieList, setSearchedMovie}) => {
  const [movieModal, setMovieModal] = useState(false);
  const [userData, setUserData] = useLocalStorage('token');
  const [currentMovie, setCurrentMovie] = useState(null);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const info = convertToken(userData?.token);
    
    if (info && info.access === 'ADMIN') {
      setAccess(true)
    }
  }, []);

  const handleClick = (item) => {
    setMovieModal(true)
    setCurrentMovie(item);
  }

  const handleClickMovieAdd = () => {
    setMovieModal(true);
    setCurrentMovie(null);
  }

  return (
    <div className="home">
      {access && 
      <div className="add-container">
        <Button onClick={handleClickMovieAdd}>ADD MOVIE</Button>
      </div>
      }
      <div className="movie-grid">
      {
        movieList.map((movie, index) => 
          <Card 
            title={movie.name} 
            key={`${index}`} 
            onClick={()=>handleClick(movie)}
          >
            <p>by- {movie.director}</p>
            <p>IMDB score {movie.imdb_score}</p>
            <p>99popularity score {movie['99popularity']}</p>
            <span className="genre-list">genre {movie.genre?.map((it, index)=> 
            (<Label key={`${index}`}>{it}</Label>))}</span>
          </Card>
          )
      }
      </div>
      {access && <Movie 
        setSearchedMovie={setSearchedMovie}
        movieModal={movieModal} 
        setMovieModal={setMovieModal}
        currentMovie={currentMovie}  
      />}
    </div>
  );
}

export default Home;        
