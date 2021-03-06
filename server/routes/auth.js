import express from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.js';


const router = express.Router();

router.post('/create', async (req, res)=> {
  try {
    console.log(req.body);
    const {username, password, access} = req.body;
    console.log(username, password, access);
    const user = new UserModel({
      username,
      password,
      access
    });
    const userDoc = await user.save();
    res.status(201).send({
      ...userDoc._doc
    });
  } catch(error) {
    res.status(400).send({
      error
    })
  }
});

router.post('/token', async(req, res)=> {
  const {username, password} = req.body;
  UserModel.findOne({username, password}, (error, user)=>{
    console.log(error);
    if (error) return res.staus(400).send({error});
    if (!Object.keys({...user}).length) return res.status(400).send({error: 'enter valid credentials'}); 
    jwt.sign({username, id: user._id, access: user.access},
           process.env.SECRET, (error, token)=> {
             if(error) {
              return res.status(400).send({error});
             }
        return res.send({token});
    });
  });
});

export default router;