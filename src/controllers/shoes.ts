import {Request, Response} from 'express';
import {getShoes, getShoeById} from '@/models/shoes';

export const findAll = (req: Request, res:Response) => {

  const shoes = getShoes()
  res.json({data:shoes})
}

export const findOne = (req: Request, res:Response) => {
  
  const {id} = req.params
  
  const shoe = getShoeById(+id)
  res.json({data:shoe})
}