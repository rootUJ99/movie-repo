import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [authModal, setAuthModal] = useState(false);
  useEffect(()=> {
   (async () => {
     try {
        const response = await fetch(`/api/movie/list?search=${searchedMovie}`);
        const moviesObj = await response.json();
        console.log(moviesObj);
        setMovieList(moviesObj?.movies);
      } catch (error){
        console.log(error);
      }
    })();
  },[searchedMovie]);

  return (
    <div className="App">
      <Header 
        setSearchedMovie ={(movie)=>setSearchedMovie(movie)}
        setAuthModal ={(value)=>setAuthModal(value)}
        />     
      {/* <Home movieList={movieList}/> */}
      <Login authModal={authModal} setAuthModal={setAuthModal}/>
    </div>
  );
}

export default App;
