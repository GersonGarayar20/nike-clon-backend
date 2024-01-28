const url = "http://localhost:3001"

test("obtener respuesta en la ruta /", async () => {
  const res = await fetch("http://localhost:3001/")
  expect(res.status).toBe(200)
})

describe("route /shoes",()=>{
  test("findAll", async () => {
    const res = await fetch(`${url}/shoes`)
    expect(res.status).toBe(200);
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));

    // ver si trae la propiedad data
    const json = await res.json()
    expect(json).toHaveProperty("data")
  })

  test("findOne", async () => {
    const id = 1
    const res = await fetch(`${url}/shoes/${id}`)

    expect(res.status).toBe(200);
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));

    const json = await res.json()

    console.log(json)
    expect(json).toHaveProperty("data")
    expect(json.data.id).toBe(1)

    // en caso no exista ese id
    const res2 = await fetch(`${url}/shoes/${1000}`)
    const json2 = await res2.json()
    expect(json2).toHaveProperty("errors")

  })

  test("create", async () => {
    const shoe = {
      name: "nombre"
    }; 
  
    const res = await fetch(`${url}/shoes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(shoe)
    });
  
    expect(res.status).toBe(200);
  
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));
  
    const json = await res.json();
    expect(json.data.name).toBe(shoe.name)
  });

  test.skip("update", async () => {
    
  
  })

  test.skip("remove", async () => {
    
  
  })

})