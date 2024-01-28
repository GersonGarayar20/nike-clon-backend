import { Router } from 'express';
import {findAll, findOne} from '@/controllers/shoes';

export const shoes = Router()

shoes
  .get("/", findAll)
  .get("/:id", findOne)
  .post("/", (req, res)=>{
    res.json({data:"hola mundo"})
  })