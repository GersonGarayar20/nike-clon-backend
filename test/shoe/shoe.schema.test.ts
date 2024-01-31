import { validateShoePartial, validateShoe } from '@/shoe/shoe.schema';

test.skip("validateShoe con datos incorrectos", ()=>{

  const shoe = {
    name: "air" // faltan datos segun el schema
  }

  const result = validateShoe(shoe) // esto debe dar error

  expect(result.success).toBe(false)
  // verificar si trae la propiedad error
  expect(result).toHaveProperty("error")

})

test.skip("validateShoe con datos correctos", ()=>{
  const shoe = {
    name: "air",
    brand: "nike",
    description: "descripcion",
    price: 99.99,
    images: ["air.jpg"],
    category: "zapatillas",
    sizes: [32,33],
    colors: ["blanco"],
    gender: "hombre",
  }

  const result = validateShoe(shoe)
  if (result.success) {
    console.log(result.data)
  } else {
    console.log(result.error)
  }

  expect(result.success).toBe(true)
  // verificar si tiene la propiedad data y que trae el objeto shoe
  expect(result).toHaveProperty("data", shoe)
})

test.skip("validar funcion validatePartialShoe", ()=>{

  const shoe = {
    name: "air",
    year: 2022 // <- year no existe en el schema
  }

  const result = validateShoePartial(shoe)
  //console.log(result)

  expect(result.success).toBe(true)
  //verificar si trae la propiedad data
  expect(result).toHaveProperty("data")
  if (result.success) {
    // verificar que no traiga la propiedad year
    expect(result.data).not.toHaveProperty("year")
  }

})