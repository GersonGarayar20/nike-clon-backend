import { Router } from 'express';
import { shoes } from './shoes';

export const routes = Router()

routes.use("/shoes", shoes)