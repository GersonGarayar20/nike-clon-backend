import { ShoeModel } from './shoe.model';
import { Shoe } from './shoe.schema';

const getShoes = async () => {
  return await ShoeModel.find()
}

const getShoeById = async (id: string) => {
  return await ShoeModel.findById(id)
}

const createShoe = async (shoe: Shoe) => {
  const newShoe = new ShoeModel(shoe)
  return await newShoe.save()
}

const updateShoe = async (id:string, shoe: Partial<Shoe>) => {
  return await ShoeModel.findOneAndUpdate({ id }, shoe, { new: true })
}

const deleteShoe = async (id: string) => {
  return await ShoeModel.findOneAndDelete({ id })
}

export default {
  getShoes,
  getShoeById,
  createShoe, 
  updateShoe, 
  deleteShoe
}