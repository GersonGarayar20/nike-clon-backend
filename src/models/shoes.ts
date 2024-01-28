import {shoes} from './data';


export const getShoes = () => {

  return shoes
}

export const getShoeById = (id:number) => {

  return shoes.find(shoe=>shoe.id === id)
}