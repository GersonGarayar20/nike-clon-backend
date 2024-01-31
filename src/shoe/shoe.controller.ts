import {Request, Response} from 'express';
import shoeService from '@/shoe/shoe.service';
import { validateShoe, validateShoePartial } from './shoe.schema';

export const findAll = async (req: Request, res:Response) => {
  try {
    const shoes = await shoeService.getShoes()
    return res.json({data:shoes})
  } catch (err: any) {
    console.log("ERROR:", err.message)
    return res.status(500).json({errors:"server error"})
  }
}

export const findOne = async (req: Request, res:Response) => {
  try {
    const {id} = req.params
  
    const shoe = await shoeService.getShoeById(id)
    console.log(shoe)

    if (!shoe) {
      return res.json({errors: "no se encontro el id"})
    }

    return res.json({data:shoe})

  } catch (err: any) {
    console.log("ERROR:", err.message)
    return res.status(500).json({errors:"server error"})
  }
}

export const create = async (req: Request, res:Response) => {
  try {
    const payload = req.body
    const result = validateShoe(payload)

    if (result.success) {
      const shoe = await shoeService.createShoe(result.data)
      return res.status(201).json({data: shoe})
    } else {
      return res.status(404).json({error:result.error})
    }
  } catch (err:any) {
    console.log("ERROR:", err.message)
    return res.status(500).json({errors:"server error"})
  }
}

export const update = async (req: Request, res:Response) => {
  try {
    const { id } = req.params
    const payload = req.body
    const result = validateShoePartial(payload)

    if (result.success) {
      const shoe = await shoeService.updateShoe(id, result.data)
      if (shoe) {
        return res.status(200).json({data: shoe})
      } else {
        return res.status(404).json({error: "no se encontro"})
      }
    } else {
      return res.status(404).json({error:result.error})
    }
  } catch (err:any) {
    console.log("ERROR:", err.message)
    return res.status(500).json({errors:"server error"})
  }
}

export const remove = async (req: Request, res:Response) => {
  try {
    const {id} = req.params
    const shoe = await shoeService.deleteShoe(id)
    if (shoe) {
      return res.status(200).json({meta: "shoe removed" ,data: shoe})
    } else {
      return res.status(404).json({errors: "no se encontro"})
    }

  } catch (err:any) {
    console.log("ERROR:", err.message)
    return res.status(500).json({errors:"server error"})
  }
}