import {useState} from 'react';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Movie = ({movieModal, setMovieModal}) => {

  const [mode, setMode] = useState('EDIT');
  const [movieForm, setMovieForm] = useState({
    name: '',
    director: '',
    '99popularity': '',
    imdb_score: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
  return (
    <Modal
      toggle={movieModal}
      onClose={handleCancel}
    >
       <form onSubmit={handleSubmit}>
        <div className="movie-form">
          <Input name="name" placeholder="name" value={movieForm.name} onChange={handleChange}/>
          <Input name="director" placeholder="director" value={movieForm.director} onChange={handleChange}/>
          <Input name="99popularity" placeholder="99popularity" value={movieForm.director} onChange={handleChange}/>
          <Input name="imdb_score" placeholder="imdb_score" value={movieForm.director} onChange={handleChange}/>
          <Button type="submit">{mode}</Button>
        </div>
        </form>
    </Modal>
  )
}

export default Movie;
