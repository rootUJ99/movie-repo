import express from 'express';
import movieModel from '../models/movie.js';

const router = express.Router();
router.get('/list', async(req, res)=>{
  try {
    const searchParam  = req.query.search ? req.query.search : '';
    const movieDocs = await movieModel.find({
      name: {$regex: searchParam, $options: 'i'}
    });
    res.send({movies: movieDocs})
  } catch(error){
    res.status(400).send({
      error
    })
  }
});

router.post('/add', async(req, res)=> {
  try {
    const movie= new movieModel({...req.body});
    const movieDoc = await movie.save();
    res.send({ ...movieDoc._doc });
  } catch (error){
    res.status(400).send({
      error
    })
  }
});

router.put('/update/:id', async(req, res)=> {
  try {
    const {id} = req.params;
    const movieDoc = await movieModel.findByIdAndUpdate(id, {...req.body});
    // const movieDoc = await movieModel.findById(id);
    res.send({ ...movieDoc._doc });
  } catch (error){
    res.status(400).send({
      error
    })
  }
});

router.delete('/delete/:id', async(req, res)=> {
  try {
    const {id} = req.params;
    const movieDoc = await movieModel.findByIdAndDelete(id, {...req.body});
    res.send({ ...movieDoc._doc });
  } catch (error){
    res.status(400).send({
      error
    })
  }
});


export default router;