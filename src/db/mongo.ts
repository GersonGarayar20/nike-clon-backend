import { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URI_DEV = process.env.MONGO_URI_DEV ?? ''
const MONGO_URI_PROD = process.env.MONGO_URI_PROD ?? ''

export const connectMongo = async () => {
  try {
    const uri = process.env.NODE_ENV === 'production' ? MONGO_URI_PROD : MONGO_URI_DEV
    await connect(uri)
    console.log('MongoDB conectado exitosamente')
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error)
  }
}