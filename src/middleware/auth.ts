import { Request, Response, NextFunction } from 'express'

export const requireApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['api-key'] // Obtener la API key de los headers

  // Verificar si la API key es válida
  const validApiKey = process.env.API_KEY

  if (apiKey === validApiKey) {
    next()
  } else {
    res.status(401).json({errors: "API key no válida"})
  }
}
