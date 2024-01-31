import shoeRepository from '@/shoe/shoe.repository';

describe.skip("probando shoeRepository", ()=>{

  it("verificar si no retorna error",async ()=>{
    expect(await shoeRepository.getShoes()).toHaveReturned()
  })



})