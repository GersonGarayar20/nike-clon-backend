const url = "http://localhost:3001"

test("obtener respuesta en la ruta /", async () => {
  const res = await fetch("http://localhost:3001/")
  expect(res.status).toBe(200)
})

describe("route /shoes",()=>{

  let data: any

  test("findAll", async () => {
    const res = await fetch(`${url}/shoes`)
    expect(res.status).toBe(200);
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));

    // ver si trae la propiedad data
    const json = await res.json()
    data = json.data
    expect(json).toHaveProperty("data")
  })

  test("findOne", async () => {
    const id = data[0]._id
    const res = await fetch(`${url}/shoes/${id}`)

    expect(res.status).toBe(200);
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));

    const json = await res.json()

    expect(json).toHaveProperty("data")
  })

  test("findOne incorrect id", async ()=>{
    // en caso no exista ese id
    const res = await fetch(`${url}/shoes/123`)
    const json = await res.json()
    expect(json).toHaveProperty("errors")
  })

  test("create", async () => {
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
  
    const res = await fetch(`${url}/shoes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(shoe)
    });
  
    // estado 201 creado
    expect(res.status).toBe(201);
  
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));
  
    const json = await res.json();
    expect(json.data.name).toBe(shoe.name)
  });

  test("update", async () => {
    const id = data[0]._id
    const shoe = {
      name: "editado",
    }
  
    const res = await fetch(`${url}/shoes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(shoe)
    });

    expect(res.status).toBe(200);
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));

    const json = await res.json()

    expect(json).toHaveProperty("data")
    expect(json.data.name).toBe("editado")
  })

  test("remove", async () => {
    const id = data[0]._id

    const res = await fetch(`${url}/shoes/${id}`, {
      method: "DELETE",
    });

    expect(res.status).toBe(200);
    const contentType = res.headers.get("content-type");
    expect(contentType).toEqual(expect.stringContaining("application/json"));

    const json = await res.json()

    expect(json).toHaveProperty("data")
  })

})