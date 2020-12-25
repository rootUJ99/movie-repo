import express from 'express';
import movieModel from '../models/movie.js';

const router = express.Router();
router.get('/list', async(req, res)=>{
  try {
    const searchParam  = req.query.search ? req.query.search : '';
    const movieDocs = await movieModel.find({
      name: {$regex: searchParam, $options: 'i'}
    });
    res.send({...movieDocs})
  } catch(error){
    res.status(400).send({
      error
    })
  }
});
export default router;