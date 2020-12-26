import {useState, useEffect} from 'react';
import {useLocalStorage} from '../../hooks';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './styles.css';

const Movie = ({movieModal, setMovieModal, currentMovie, setSearchedMovie}) => {
  const mode = currentMovie ? 'EDIT' : 'ADD';
  const [userData] = useLocalStorage('token');
  const [movieForm, setMovieForm] = useState({
    name: '',
    director: '',
    '99popularity': '',
    imdb_score: '',
  });
  
  useEffect(() => {
    setMovieForm(currentMovie);
  }, [currentMovie])

  const headers = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${userData?.token}`, 
  });

  const handleEdit = async() => {
    try {
      const raw = await fetch(`/api/movie/update/${currentMovie?._id}`, {
        headers: headers(),
        method: 'PUT',
        body: JSON.stringify(movieForm), 
      });
      const data = await raw.json();
      setMovieModal(false);
      console.log(data);
      setSearchedMovie(' ');
    } catch(error) {
      console.log(error)
    }
  }

  const handleAdd = async() => {
    try {
      const raw = await fetch(`/api/movie/add`, {
        headers: headers(),
        method: 'POST',
        body: JSON.stringify(movieForm), 
      });
      const data = await raw.json();
      setMovieModal(false);
      console.log(data);
      setSearchedMovie(' ');
    } catch(error) {
      console.log(error)
    } 
  }

  const handleDelete = async() => {
    try {
      const raw = await fetch(`/api/movie/delete/${currentMovie?._id}`, {
        headers: headers(),
        method: 'DELETE',
      });
      const data = await raw.json();
      setMovieModal(false);
      console.log(data);
      setSearchedMovie(' ');
    } catch(error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'ADD')  handleAdd();
    if (mode === 'EDIT')  handleEdit();
  }

  const handleChange = (e) => {
    setMovieForm({
      ...movieForm,
      [e.target.name]: e.target.value,
    });
  }

  const handleCancel = () => {
    setMovieModal(false);
  }
  console.log(currentMovie);
  return (
    <Modal
      toggle={movieModal}
      onClose={handleCancel}
    >
       <form onSubmit={handleSubmit}>
        <div className="movie-form">
          <Input name="name" placeholder="name" value={movieForm?.name} onChange={handleChange}/>
          <Input name="director" placeholder="director" value={movieForm?.director} onChange={handleChange}/>
          <Input name="99popularity" placeholder="99popularity" value={movieForm?.['99popularity']} onChange={handleChange}/>
          <Input name="imdb_score" placeholder="imdb_score" value={movieForm?.imdb_score} onChange={handleChange}/>
          <Button type="submit">{mode}</Button>
          {mode === 'EDIT' && <Button type="button" onClick={handleDelete}>DELETE</Button>}
        </div>
        </form>
    </Modal>
  )
}

export default Movie;
