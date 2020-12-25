import Card from '../../components/Card';
import Label from '../../components/Label';
import './styles.css';

const Home = ({movieList}) => {
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
    </div>
  );
}

export default Home;        
