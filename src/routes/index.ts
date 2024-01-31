import { Router } from 'express';
import { shoe } from '@/shoe/shoe.route';

export const routes = Router()

routes.use("/shoes", shoe)